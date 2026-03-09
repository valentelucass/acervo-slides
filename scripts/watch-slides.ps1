param(
    [string]$Root = (Join-Path $PSScriptRoot ".."),
    [int]$IntervalSeconds = 2
)

. (Join-Path $PSScriptRoot "slide-tools.ps1")

$resolvedRoot = (Resolve-Path $Root).Path
$pagesPath = Join-Path $resolvedRoot "pages"
$updateScript = Join-Path $PSScriptRoot "update-slides-manifest.ps1"

function Get-SlidesSignature {
    param(
        [string]$Path
    )

    if (-not (Test-Path $Path)) {
        return ""
    }

    $entries = Get-ChildItem -Path $Path -Directory |
        Where-Object { $_.Name -like "slides-*" } |
        Sort-Object Name |
        ForEach-Object {
            $indexPath = Join-Path $_.FullName "index.html"
            $configPath = Join-Path $_.FullName "deck.json"
            $folderStamp = $_.LastWriteTimeUtc.Ticks
            $indexStamp = if (Test-Path $indexPath) { (Get-Item $indexPath).LastWriteTimeUtc.Ticks } else { 0 }
            $configStamp = if (Test-Path $configPath) { (Get-Item $configPath).LastWriteTimeUtc.Ticks } else { 0 }

            "{0}|{1}|{2}|{3}" -f $_.Name, $folderStamp, $indexStamp, $configStamp
        }

    return ($entries -join ";")
}

if (-not (Test-Path $pagesPath)) {
    New-Item -ItemType Directory -Path $pagesPath | Out-Null
}

Get-ChildItem -Path $pagesPath -Directory -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -like "slides-*" } |
    ForEach-Object {
        Ensure-SlideScaffold -FolderPath $_.FullName | Out-Null
    }

& $updateScript -Root $resolvedRoot
$lastSignature = Get-SlidesSignature -Path $pagesPath

Write-Host "Observando $pagesPath"
Write-Host "Pressione Ctrl+C para parar."

while ($true) {
    Start-Sleep -Seconds $IntervalSeconds
    $currentSignature = Get-SlidesSignature -Path $pagesPath

    if ($currentSignature -ne $lastSignature) {
        $lastSignature = $currentSignature
        & $updateScript -Root $resolvedRoot
    }
}
