@echo off
echo ========================================================
echo Pushing Kumkum Sharma Portfolio to GitHub (Kumkumsh950-stack)
echo ========================================================
echo.
cd /d "%~dp0"

echo 1. Checking git status...
git status
echo.

echo 2. Pushing main branch to origin...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo SUCCESS! Repository pushed successfully to GitHub:
    echo https://github.com/Kumkumsh950-stack/biotechnology-portfolio
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo Notice: If you received "Repository not found", please ensure
    echo you have created the empty repository on GitHub first at:
    echo https://github.com/new
    echo with repository name: biotechnology-portfolio
    echo ========================================================
)

echo.
pause
