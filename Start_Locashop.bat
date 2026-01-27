@echo off
setlocal
:: Configuración de ruta
set PROJECT_DIR=c:\Users\User\Documents\nuclear-hand 5
cd /d "%PROJECT_DIR%"

echo [NH_CEREBRO] Iniciando Entorno Locashop (Vite)...

:: 1. Verificar dependencias
if not exist node_modules (
    echo [!] node_modules no detectado. Ejecutando npm install...
    call npm install
)

:: 2. Cerrar cualquier proceso previo en 5173 para evitar conflictos
echo [OK] Limpiando puerto 5173...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173') do (
    taskkill /f /pid %%a > nul 2>&1
)

:: 3. Arrancar servidor con flags exigidos
echo [OK] Levantando servidor Vite en puerto 5173 (Host: 0.0.0.0)...
start "LOCASHOP_SERVER" cmd /k "npm run dev -- --host 0.0.0.0 --port 5173 --strictPort"

:: 4. Esperar a que el servidor este listo
echo [OK] Esperando 5 segundos para apertura de navegador...
timeout /t 5 /nobreak > nul

:: 5. Abrir Locashop
echo [OK] Abriendo Locashop en http://localhost:5173
start http://localhost:5173/studio/index.html

echo.
echo [FINALIZADO] Entorno reactivado. 
echo Si el navegador no abrio, ve a http://localhost:5173
pause
exit
