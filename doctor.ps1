#!/usr/bin/env pwsh
Write-Host "--- NUCLEAR HAND 5 DOCTOR REPORT ---" -ForegroundColor Cyan

# 1. Directory
Write-Host "[1/5] Checking Directory..." -NoNewline
if (Test-Path "package.json") {
    Write-Host " OK (Root detected)" -ForegroundColor Green
} else {
    Write-Host " FAIL (package.json not found)" -ForegroundColor Red
    exit 1
}

# 2. Node/npm
Write-Host "[2/5] Checking Toolchain..." -NoNewline
$nodeVer = node -v
$npmVer = npm -v
Write-Host " Node $nodeVer, npm $npmVer" -ForegroundColor White

# 3. Entry File
Write-Host "[3/5] Checking index.html..." -NoNewline
if (Test-Path "index.html") {
    Write-Host " OK" -ForegroundColor Green
} else {
    Write-Host " FAIL (index.html missing in root)" -ForegroundColor Red
}

# 4. Port Status
Write-Host "[4/5] Checking Port 5173..." -NoNewline
$portCheck = netstat -ano | findstr :5173 | findstr LISTENING
if ($portCheck) {
    Write-Host " BUSY (Process found)" -ForegroundColor Yellow
} else {
    Write-Host " FREE" -ForegroundColor Green
}

# 5. Recommendation
Write-Host "`n--- RECOMMENDATION ---"
Write-Host "To start the stable dev server, run:" -ForegroundColor Gray
Write-Host "npm run dev" -ForegroundColor Green
Write-Host "`nTo start the stable preview, run:" -ForegroundColor Gray
Write-Host "npm run build && npm run preview" -ForegroundColor Green
