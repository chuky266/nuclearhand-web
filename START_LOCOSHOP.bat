@echo off
setlocal
cd /d "%~dp0"
echo [LOCOSHOP] Verificando puerto 5173...

:: Matar cualquier proceso previo en el puerto 5173 para evitar conflictos
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173 ^| findstr LISTENING') do (
    echo [LOCOSHOP] Limpiando instancia previa (PID: %%a)...
    taskkill /f /pid %%a >nul 2>&1
)

echo [LOCOSHOP] Arrancando servidor Vite (127.0.0.1:5173)...
:: Iniciamos el servidor en una ventana nueva y minimizada si es posible, o simplemente cmd /k
start "LOCOSHOP_SERVER" cmd /k "npx vite --host 127.0.0.1 --port 5173"

echo [LOCOSHOP] Esperando a que el sistema este listo...
timeout /t 5 /nobreak > nul

echo [LOCOSHOP] Abriendo navegador en http://127.0.0.1:5173/
start http://127.0.0.1:5173/

echo [DONE] Servidor en marcha. No cierres la ventana de comandos de Vite.
exit
