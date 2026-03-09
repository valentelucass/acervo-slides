import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const pagesSourceDir = path.join(rootDir, "pages");
const pagesOutputDir = path.join(distDir, "pages");
const publicSourceDir = path.join(rootDir, "public");
const publicOutputDir = path.join(distDir, "public");
const runtimeFiles = [
    ["index.html", "index.html"],
    [path.join("css", "portal.css"), path.join("css", "portal.css")],
    [path.join("js", "portal.js"), path.join("js", "portal.js")]
];

function normalizeWhitespace(value = "") {
    return value.replace(/\s+/g, " ").trim();
}

function stripHtml(value = "") {
    return normalizeWhitespace(
        value
            .replace(/<[^>]+>/g, " ")
            .replace(/&nbsp;/gi, " ")
            .replace(/&amp;/gi, "&")
            .replace(/&lt;/gi, "<")
            .replace(/&gt;/gi, ">")
            .replace(/&quot;/gi, '"')
            .replace(/&#39;/gi, "'")
    );
}

function getDisplayName(folderName) {
    const baseName = folderName.replace(/^slides-/, "");
    const parts = baseName.split(/[-_]/).filter(Boolean);

    if (!parts.length) {
        return folderName;
    }

    return parts
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
}

async function pathExists(targetPath) {
    try {
        await stat(targetPath);
        return true;
    }
    catch {
        return false;
    }
}

async function getDeckConfig(folderPath, folderName) {
    const configPath = path.join(folderPath, "deck.json");
    const defaults = {
        exists: false,
        title: getDisplayName(folderName),
        summary: "Apresentacao em construcao. Edite este deck para atualizar o card do portal."
    };

    if (!(await pathExists(configPath))) {
        return defaults;
    }

    try {
        const rawConfig = JSON.parse(await readFile(configPath, "utf8"));
        return {
            exists: true,
            title: normalizeWhitespace(rawConfig.title || defaults.title) || defaults.title,
            summary: normalizeWhitespace(rawConfig.summary || defaults.summary) || defaults.summary
        };
    }
    catch {
        return defaults;
    }
}

function countSlides(html) {
    const classAttributes = [...html.matchAll(/<[^>]+\bclass\s*=\s*["']([^"']*)["'][^>]*>/gis)];

    return classAttributes.reduce((total, match) => {
        const classList = match[1].split(/\s+/).filter(Boolean);
        return total + (classList.includes("slide") ? 1 : 0);
    }, 0);
}

function extractTagText(html, tagName) {
    const match = html.match(new RegExp(`<${tagName}[^>]*>(.*?)</${tagName}>`, "is"));
    return match ? stripHtml(match[1]) : "";
}

async function getDeckMetadata(folderPath, folderName) {
    const indexPath = path.join(folderPath, "index.html");
    const configPath = path.join(folderPath, "deck.json");
    const html = await readFile(indexPath, "utf8");
    const deckConfig = await getDeckConfig(folderPath, folderName);
    let title = extractTagText(html, "title");
    let summary = extractTagText(html, "h1") || extractTagText(html, "h2");

    if (!title) {
        title = deckConfig.title;
    }

    if (deckConfig.exists && deckConfig.title) {
        title = deckConfig.title;
    }

    if (!summary || summary === title) {
        summary = deckConfig.summary;
    }

    if (deckConfig.exists && deckConfig.summary) {
        summary = deckConfig.summary;
    }

    const timestamps = [await stat(folderPath), await stat(indexPath)];

    if (await pathExists(configPath)) {
        timestamps.push(await stat(configPath));
    }

    const updatedAt = timestamps
        .map((entry) => entry.mtime)
        .sort((left, right) => right.getTime() - left.getTime())[0]
        .toISOString();

    return {
        folder: folderName,
        href: `./pages/${folderName}/`,
        title,
        summary,
        slideCount: countSlides(html),
        updatedAt,
        generated: false
    };
}

async function copyDeckTree(sourceDir, targetDir) {
    await mkdir(targetDir, { recursive: true });

    const entries = await readdir(sourceDir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name === "deck.json") {
            continue;
        }

        const sourcePath = path.join(sourceDir, entry.name);
        const targetPath = path.join(targetDir, entry.name);

        if (entry.isDirectory()) {
            await copyDeckTree(sourcePath, targetPath);
            continue;
        }

        await cp(sourcePath, targetPath, { force: true });
    }
}

async function buildRuntime() {
    await rm(distDir, { recursive: true, force: true });
    await mkdir(distDir, { recursive: true });
    await mkdir(pagesOutputDir, { recursive: true });
    await mkdir(path.join(distDir, "css"), { recursive: true });
    await mkdir(path.join(distDir, "js"), { recursive: true });

    for (const [sourceFile, targetFile] of runtimeFiles) {
        await cp(path.join(rootDir, sourceFile), path.join(distDir, targetFile), { force: true });
    }

    if (await pathExists(publicSourceDir)) {
        await cp(publicSourceDir, publicOutputDir, { recursive: true, force: true });
    }
}

async function buildPagesAndManifest() {
    if (!(await pathExists(pagesSourceDir))) {
        await writeFile(
            path.join(distDir, "js", "slides-manifest.js"),
            "// Auto-generated by scripts/build-vercel.mjs\nwindow.SLIDES_MANIFEST = [];\n",
            "utf8"
        );
        return [];
    }

    const folders = (await readdir(pagesSourceDir, { withFileTypes: true }))
        .filter((entry) => entry.isDirectory() && entry.name.startsWith("slides-"))
        .map((entry) => entry.name);

    const manifest = [];

    for (const folderName of folders) {
        const sourceFolder = path.join(pagesSourceDir, folderName);
        const outputFolder = path.join(pagesOutputDir, folderName);
        const indexPath = path.join(sourceFolder, "index.html");

        if (!(await pathExists(indexPath))) {
            continue;
        }

        await copyDeckTree(sourceFolder, outputFolder);
        manifest.push(await getDeckMetadata(sourceFolder, folderName));
    }

    manifest.sort((left, right) => new Date(right.updatedAt) - new Date(left.updatedAt));

    const manifestContent = `// Auto-generated by scripts/build-vercel.mjs\nwindow.SLIDES_MANIFEST = ${JSON.stringify(manifest, null, 4)};\n`;
    await writeFile(path.join(distDir, "js", "slides-manifest.js"), manifestContent, "utf8");

    return manifest;
}

const manifest = await (async () => {
    await buildRuntime();
    return buildPagesAndManifest();
})();

console.log(`Build Vercel pronto: ${manifest.length} apresentacao(oes) em dist/.`);
