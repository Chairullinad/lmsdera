@echo off
title LMS DERA - Portal Belajar CPNS (TWK, TIU, TKP)
cd /d "%~dp0"
echo ===================================================
echo   MENJALANKAN LMS DERA - PORTAL BELAJAR CPNS
echo ===================================================
if not exist "node_modules" (
    echo Menginstal dependensi pertama kali... Mohon tunggu sebentar...
    call npm install
)
echo Membuka aplikasi LMS DERA di browser...
call npm run dev
pause

