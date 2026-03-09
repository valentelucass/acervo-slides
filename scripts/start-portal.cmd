@echo off
set ROOT=%~dp0..
start "Slides Watcher" powershell -NoExit -ExecutionPolicy Bypass -File "%~dp0watch-slides.ps1" -Root "%ROOT%"
start "" "%ROOT%\index.html"
