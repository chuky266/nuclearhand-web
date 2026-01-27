@echo off
setlocal
echo [LOCOSHOP] Deteniendo servidor (Puerto 5173)...

set FOUND=0
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173 ^| findstr LISTENING') do (
    echo [OK] Cerrando proceso (PID: %%a)...
    taskkill /f /pid %%a > nul 2>&1
    set FOUND=1
)

if "%FOUND%"=="0" (
    echo [!] No se detecto ningun servidor activo en el puerto 5173.
) else (
    echo [OK] Servidor detenido correctamente.
)

timeout /t 2 > nul
exit
