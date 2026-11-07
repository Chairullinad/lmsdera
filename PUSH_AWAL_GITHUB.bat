@echo off
title Setup & Push Awal LMS DERA ke GitHub (chairullinad/lmsdera)
cd /d "%~dp0"
echo ===============================================================
echo   SETUP DAN PUSH LMS DERA KE GITHUB (chairullinad/lmsdera)
echo ===============================================================

call npm run build

git init -b main
git config user.name "chairullinad"
git config user.email "chairullinad@users.noreply.github.com"
git add .
git commit -m "Initial commit: LMS DERA Portal Belajar CPNS (TWK, TIU, TKP)"

git remote remove origin >nul 2>nul
git remote add origin https://github.com/chairullinad/lmsdera.git

echo.
echo Mengirim kode ke https://github.com/chairullinad/lmsdera.git ...
git push -u origin main

echo.
echo ===============================================================
echo   SELESAI!
echo   1. Buka: https://github.com/chairullinad/lmsdera/settings/pages
echo   2. Pada bagian "Build and deployment" -^> Source:
echo      Pilih "GitHub Actions" (atau Branch: main / folder: /docs)
echo   3. Link Akses HP Anda:
echo      https://chairullinad.github.io/lmsdera/
echo ===============================================================
pause
