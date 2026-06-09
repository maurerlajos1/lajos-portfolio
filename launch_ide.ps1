$paths = @(
    $env:LOCALAPPDATA,
    $env:ProgramFiles,
    ${env:ProgramFiles(x86)}
)

foreach ($p in $paths) {
    if (Test-Path $p) {
        $exe = Get-ChildItem -Path $p -Filter "Antigravity IDE.exe" -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($exe) {
            Write-Host "Found at: $($exe.FullName)"
            Start-Process $exe.FullName
            exit 0
        }
    }
}
Write-Host "Not found."
