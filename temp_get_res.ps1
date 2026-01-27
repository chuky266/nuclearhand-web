Add-Type -AssemblyName System.Drawing;
$files = Get-ChildItem "c:\Users\User\Documents\nuclear-hand 5\images\products\*.png";
foreach ($file in $files) {
    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName);
        Write-Host "$($file.Name): $($img.Width)x$($img.Height)";
        $img.Dispose();
    } catch {
        Write-Host "Error reading $($file.Name)";
    }
}
