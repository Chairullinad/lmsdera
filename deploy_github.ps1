$ErrorActionPreference = "Stop"
Set-Location "D:\ooo\LMS_DERA"

Write-Host "1. Memeriksa kredensial GitHub..."
$credInput = "protocol=https`nhost=github.com`n`n"
$credOutput = $credInput | git credential fill
$tokenLine = ($credOutput -split "`n") | Where-Object { $_ -match "^password=" }
if (-not $tokenLine) {
    Write-Error "Token GitHub tidak ditemukan di Git Credential Manager."
}
$token = ($tokenLine -replace "^password=", "").Trim()

$headers = @{
    "Authorization" = "Bearer $token"
    "Accept"        = "application/vnd.github+json"
    "User-Agent"    = "LMS-DERA-Deployer"
}

Write-Host "2. Membuat repository Public chairullinad/lmsdera di GitHub..."
try {
    $body = @{
        name        = "lmsdera"
        description = "LMS DERA - Portal Belajar SKD CPNS (TWK, TIU, TKP)"
        private     = $false
        auto_init   = $false
    } | ConvertTo-Json
    $repoResp = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $headers -Body $body -ContentType "application/json"
    Write-Host "   Repository berhasil dibuat: $($repoResp.html_url)"
} catch {
    Write-Host "   Repository mungkin sudah ada atau siap digunakan: $($_.Exception.Message)"
}

Write-Host "3. Menginstal paket & membangun aplikasi (npm run build)..."
if (-not (Test-Path "node_modules")) {
    npm install
}
npm run build

Write-Host "4. Melakukan Git Commit & Push ke main..."
git init -b main
git config user.name "chairullinad"
git config user.email "chairullinadessy@gmail.com"
git add .
git commit -m "Deploy LMS DERA Portal Belajar CPNS (TWK, TIU, TKP)" --allow-empty

$remoteExists = git remote
if ($remoteExists -contains "origin") {
    git remote set-url origin "https://github.com/chairullinad/lmsdera.git"
} else {
    git remote add origin "https://github.com/chairullinad/lmsdera.git"
}

git push -u origin main --force

Write-Host "5. Mengaktifkan GitHub Pages secara otomatis..."
try {
    $pagesBody = @{
        source = @{
            branch = "main"
            path   = "/docs"
        }
    } | ConvertTo-Json
    $pagesResp = Invoke-RestMethod -Uri "https://api.github.com/repos/chairullinad/lmsdera/pages" -Method Post -Headers $headers -Body $pagesBody -ContentType "application/json"
    Write-Host "   GitHub Pages berhasil diaktifkan: $($pagesResp.html_url)"
} catch {
    Write-Host "   Info GitHub Pages: $($_.Exception.Message)"
}

Write-Host "SELESAI! LMS DERA sudah online."
