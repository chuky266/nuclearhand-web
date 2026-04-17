Add-Type -AssemblyName System.Drawing
$images = Get-ChildItem "c:\Users\User\Documents\nuclear-hand 5\images\products\*.png"
foreach ($imgFile in $images) {
    Write-Host "---"
    Write-Host "FILE:$($imgFile.Name)"
    $img = [System.Drawing.Image]::FromFile($imgFile.FullName)
    Write-Host "WIDTH:$($img.Width)"
    Write-Host "HEIGHT:$($img.Height)"
    $img.Dispose()
}
