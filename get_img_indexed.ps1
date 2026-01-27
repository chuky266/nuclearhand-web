$i = [int]$args[0]
$images = Get-ChildItem "c:\Users\User\Documents\nuclear-hand 5\images\products\*.png"
if ($i -lt $images.Count) {
    $imgFile = $images[$i]
    Add-Type -AssemblyName System.Drawing
    $img = [System.Drawing.Image]::FromFile($imgFile.FullName)
    Write-Host "FILE:$($imgFile.Name)|WIDTH:$($img.Width)|HEIGHT:$($img.Height)"
    $img.Dispose()
}
