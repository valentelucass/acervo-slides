const state = {
    query: "",
    manifest: Array.isArray(window.SLIDES_MANIFEST) ? window.SLIDES_MANIFEST : []
};

const elements = {
    deckGrid: document.getElementById("deck-grid"),
    deckCount: document.getElementById("deck-count"),
    slideCount: document.getElementById("slide-count"),
    lastUpdate: document.getElementById("last-update"),
    searchInput: document.getElementById("search-input")
};

let manifestRefreshInFlight = false;
let lastManifestKey = "";

function formatDate(value) {
    if (!value) {
        return "--";
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return "--";
    }

    return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short"
    }).format(date);
}

function escapeHtml(value = "") {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function normalize(value = "") {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function filterDecks(items, query) {
    if (!query) {
        return items;
    }

    const normalizedQuery = normalize(query.trim());
    return items.filter((item) => {
        const haystack = [item.title, item.summary, item.folder]
            .filter(Boolean)
            .map((entry) => normalize(entry))
            .join(" ");

        return haystack.includes(normalizedQuery);
    });
}

function sortManifest(items) {
    return [...items].sort((left, right) => {
        const leftTime = new Date(left.updatedAt || 0).getTime();
        const rightTime = new Date(right.updatedAt || 0).getTime();
        return rightTime - leftTime;
    });
}

function getManifestKey(items) {
    return JSON.stringify(items.map((item) => ({
        folder: item.folder || "",
        href: item.href || "",
        title: item.title || "",
        summary: item.summary || "",
        slideCount: Number(item.slideCount) || 0,
        updatedAt: item.updatedAt || "",
        generated: Boolean(item.generated)
    })));
}

function loadManifestSnapshot() {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = `js/slides-manifest.js?ts=${Date.now()}`;
        script.async = true;

        script.onload = () => {
            script.remove();
            resolve(Array.isArray(window.SLIDES_MANIFEST) ? window.SLIDES_MANIFEST : []);
        };

        script.onerror = () => {
            script.remove();
            reject(new Error("Nao foi possivel recarregar o manifesto."));
        };

        document.head.appendChild(script);
    });
}

function renderStats(items) {
    const totalSlides = items.reduce((sum, item) => sum + (Number(item.slideCount) || 0), 0);
    const latest = items[0]?.updatedAt || "";

    elements.deckCount.textContent = String(items.length);
    elements.slideCount.textContent = String(totalSlides);
    elements.lastUpdate.textContent = formatDate(latest);
}

function renderEmptyState(query) {
    const message = query
        ? "Nenhuma apresentacao combina com a busca atual."
        : "Nenhuma apresentacao foi encontrada. Crie uma pasta pages/slides-nome. Se o monitor estiver aberto, o card sera criado automaticamente.";

    elements.deckGrid.innerHTML = `
        <article class="empty-state">
            <p>${escapeHtml(message)}</p>
        </article>
    `;
}

function renderDecks(items) {
    if (!items.length) {
        renderEmptyState(state.query);
        return;
    }

    elements.deckGrid.innerHTML = items.map((item) => {
        const slideLabel = `${item.slideCount || 0} slides`;
        const summary = item.summary || "Apresentacao pronta para abrir.";
        const generatedTag = item.generated
            ? `<span class="deck-generated">scaffold automatico</span>`
            : "";

        return `
            <article class="deck-card">
                <div class="deck-top">
                    <div>
                        <p class="deck-folder">${escapeHtml(item.folder || "slides")}</p>
                        <h2 class="deck-title">${escapeHtml(item.title || "Sem titulo")}</h2>
                    </div>
                    <span class="deck-badge">${escapeHtml(slideLabel)}</span>
                </div>

                <p class="deck-summary">${escapeHtml(summary)}</p>
                ${generatedTag}

                <div class="deck-meta">
                    <span>${escapeHtml(formatDate(item.updatedAt))}</span>
                    <span>${escapeHtml(item.folder || "")}</span>
                </div>

                <a class="deck-link" href="${escapeHtml(item.href || "#")}">Abrir apresentacao</a>
            </article>
        `;
    }).join("");
}

function render() {
    const sortedManifest = sortManifest(state.manifest);
    const visibleDecks = filterDecks(sortedManifest, state.query);
    renderStats(sortedManifest);
    renderDecks(visibleDecks);
}

function refreshManifestSilently() {
    if (manifestRefreshInFlight) {
        return;
    }

    manifestRefreshInFlight = true;

    loadManifestSnapshot()
        .then((nextManifest) => {
            const nextKey = getManifestKey(nextManifest);

            if (nextKey !== lastManifestKey) {
                state.manifest = nextManifest;
                lastManifestKey = nextKey;
                render();
            }
        })
        .catch(() => {
            return;
        })
        .finally(() => {
            manifestRefreshInFlight = false;
        });
}

elements.searchInput?.addEventListener("input", (event) => {
    state.query = event.target.value;
    render();
});

document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
        refreshManifestSilently();
    }
});

lastManifestKey = getManifestKey(state.manifest);
render();
window.setInterval(refreshManifestSilently, 4000);
