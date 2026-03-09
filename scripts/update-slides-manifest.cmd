@echo off
powershell -ExecutionPolicy Bypass -File "%~dp0update-slides-manifest.ps1" %*
