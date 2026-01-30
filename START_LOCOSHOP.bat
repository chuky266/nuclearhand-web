@echo off
setlocal
cd /d "%~dp0"
echo [LOCOSHOP] Verificando puerto 5173...

:: Matar procesos en 5173
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5173 ^| findstr LISTENING') do (
    taskkill /f /pid %%a >nul 2>&1
)

echo [LOCOSHOP] Preparando entorno estable (Build + Preview)...
:: Usamos build + preview para evitar errores 404 en el modo dev
start "LOCOSHOP_SERVER" cmd /k "npm run build && npm run preview"

echo [LOCOSHOP] Esperando a que el sistema este listo...
timeout /t 5 /nobreak > nul

echo [DONE] Servidor en marcha. No cierres la ventana de comandos de Vite.
echo Si quieres ver la web: abrir manualmente http://127.0.0.1:5173/ o clicar el enlace.
exit
