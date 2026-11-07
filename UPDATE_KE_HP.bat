@echo off
title Update Materi LMS DERA ke GitHub & HP
cd /d "%~dp0"
echo ===================================================
echo   MEMBANGUN & MENGIRIM UPDATE MATERI KE GITHUB
echo ===================================================
call npm run build
git add .
git commit -m "Update modul materi belajar CPNS LMS DERA"
git push origin main
echo.
echo Selesai! Tunggu sekitar 30-60 detik, lalu refresh link di HP Anda:
echo https://chairullinad.github.io/lmsdera/
pause
