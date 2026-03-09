function Normalize-SlideText {
    param(
        [AllowNull()]
        [string]$Text
    )

    if ([string]::IsNullOrWhiteSpace($Text)) {
        return ""
    }

    return ([regex]::Replace($Text.Trim(), "\s+", " "))
}

function Get-SlideDisplayName {
    param(
        [string]$FolderName
    )

    $baseName = $FolderName -replace "^slides-", ""
    $parts = $baseName -split "[-_]" | Where-Object { $_ }

    if (-not $parts) {
        return $FolderName
    }

    $textInfo = (Get-Culture).TextInfo
    return ($parts | ForEach-Object { $textInfo.ToTitleCase($_) }) -join " "
}

function Get-SlideConfig {
    param(
        [string]$FolderPath,
        [string]$FolderName
    )

    $defaultTitle = Get-SlideDisplayName -FolderName $FolderName
    $defaultSummary = "Apresentacao em construcao. Edite este deck para atualizar o card do portal."
    $configPath = Join-Path $FolderPath "deck.json"

    $config = [pscustomobject]@{
        Title = $defaultTitle
        Summary = $defaultSummary
        Path = $configPath
        Exists = $false
    }

    if (-not (Test-Path $configPath)) {
        return $config
    }

    try {
        $rawConfig = Get-Content -Path $configPath -Raw -Encoding utf8 | ConvertFrom-Json
        $config.Exists = $true

        if (-not [string]::IsNullOrWhiteSpace($rawConfig.title)) {
            $config.Title = Normalize-SlideText -Text $rawConfig.title
        }

        if (-not [string]::IsNullOrWhiteSpace($rawConfig.summary)) {
            $config.Summary = Normalize-SlideText -Text $rawConfig.summary
        }
    }
    catch {
        return $config
    }

    return $config
}

function Ensure-SlideScaffold {
    param(
        [string]$FolderPath
    )

    if (-not (Test-Path $FolderPath)) {
        return $null
    }

    $folderItem = Get-Item $FolderPath
    $folderName = $folderItem.Name
    $config = Get-SlideConfig -FolderPath $FolderPath -FolderName $folderName
    $indexPath = Join-Path $FolderPath "index.html"

    if (Test-Path $indexPath) {
        return [pscustomobject]@{
            Created = $false
            Folder = $folderName
            Title = $config.Title
            Summary = $config.Summary
        }
    }

    $stylesPath = Join-Path $FolderPath "styles.css"
    $scriptPath = Join-Path $FolderPath "script.js"
    $configPath = $config.Path

    if (-not (Test-Path $configPath)) {
        $configJson = [pscustomobject]@{
            title = $config.Title
            summary = $config.Summary
        } | ConvertTo-Json

        Set-Content -Path $configPath -Value $configJson -Encoding utf8
    }

    $indexContent = @"
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$($config.Title)</title>
    <link rel="icon" href="../../public/favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <main class="deck-shell">
        <section class="slide active">
            <p class="eyebrow">Novo deck</p>
            <h1>$($config.Title)</h1>
            <p class="summary">$($config.Summary)</p>
            <ul class="check-list">
                <li>Edite o arquivo index.html para montar seus slides.</li>
                <li>Atualize deck.json se quiser mudar o titulo e o resumo do card.</li>
                <li>O portal principal vai detectar este deck automaticamente.</li>
            </ul>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>
"@

    $stylesContent = @"
:root {
    --bg: #081120;
    --panel: rgba(8, 24, 44, 0.86);
    --line: rgba(151, 194, 255, 0.18);
    --text: #f2f6fc;
    --muted: #bfd0e8;
    --accent: #66d9c2;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 24px;
    font-family: "Segoe UI", sans-serif;
    color: var(--text);
    background:
        radial-gradient(circle at top left, rgba(102, 217, 194, 0.18), transparent 28%),
        linear-gradient(160deg, #050b15 0%, #0b1728 100%);
}

.deck-shell {
    width: min(860px, 100%);
}

.slide {
    padding: 32px;
    border: 1px solid var(--line);
    border-radius: 24px;
    background: var(--panel);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.26);
}

.eyebrow {
    margin: 0 0 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--accent);
    font-size: 0.8rem;
}

h1 {
    margin: 0 0 16px;
    font-size: clamp(2rem, 4vw, 3.5rem);
}

.summary {
    margin: 0;
    color: var(--muted);
    line-height: 1.7;
    font-size: 1.05rem;
}

.check-list {
    margin: 28px 0 0;
    padding-left: 20px;
    line-height: 1.8;
    color: var(--text);
}
"@

    $scriptContent = @"
document.addEventListener("DOMContentLoaded", () => {
    document.title = document.querySelector("h1")?.textContent || document.title;
});
"@

    Set-Content -Path $indexPath -Value $indexContent -Encoding utf8
    Set-Content -Path $stylesPath -Value $stylesContent -Encoding utf8
    Set-Content -Path $scriptPath -Value $scriptContent -Encoding utf8

    return [pscustomobject]@{
        Created = $true
        Folder = $folderName
        Title = $config.Title
        Summary = $config.Summary
    }
}
