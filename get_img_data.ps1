Add-Type -AssemblyName System.Drawing
$images = Get-ChildItem "c:\Users\User\Documents\nuclear-hand 5\images\products\*.png"
foreach ($imgFile in $images) {
    $img = [System.Drawing.Image]::FromFile($imgFile.FullName)
    Write-Host "$($imgFile.Name)|$( $img.Width )|$( $img.Height )"
    $img.Dispose()
}
