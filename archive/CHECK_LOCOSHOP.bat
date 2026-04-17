@echo off
setlocal
echo [LOCOSHOP] Verificando netstat del puerto 5173...
netstat -ano | findstr :5173
echo [LOCOSHOP] Haciendo curl a http://127.0.0.1:5173/...
curl -I http://127.0.0.1:5173/
echo.
echo [LOCOSHOP] Verificando carga real via PowerShell...
powershell -Command "try { $resp = Invoke-WebRequest -UseBasicParsing http://127.0.0.1:5173 -TimeoutSec 5; if ($resp.StatusCode -eq 200) { Write-Host '[OK] Locashop cargando correctamente.'; exit 0 } } catch { Write-Host '[FAIL] Locashop no responde.'; exit 1 }"
pause
