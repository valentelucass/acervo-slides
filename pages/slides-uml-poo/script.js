document.addEventListener("DOMContentLoaded", () => {
    const slides = Array.from(document.querySelectorAll(".slide"));
    const indicator = document.getElementById("slide-indicator");
    const progressBar = document.getElementById("progress-bar");
    const prevButton = document.querySelector(".nav-button.prev");
    const nextButton = document.querySelector(".nav-button.next");
    const deckTitle = "UML e POO: Diagrama de Classes";

    let currentIndex = 0;

    function formatIndex(index) {
        return String(index + 1).padStart(2, "0");
    }

    function update() {
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentIndex);
        });

        indicator.textContent = `${formatIndex(currentIndex)} / ${String(slides.length).padStart(2, "0")}`;
        progressBar.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === slides.length - 1;

        const slideTitle = slides[currentIndex].dataset.title || "Slide";
        document.title = `${slideTitle} | ${deckTitle}`;
    }

    function goTo(index) {
        if (index < 0 || index >= slides.length) {
            return;
        }

        currentIndex = index;
        update();
    }

    prevButton.addEventListener("click", () => goTo(currentIndex - 1));
    nextButton.addEventListener("click", () => goTo(currentIndex + 1));

    window.toggleFullscreen = function() {
        const shell = document.querySelector('.presentation-shell');
        if (!document.fullscreenElement) {
            shell.requestFullscreen().catch(err => {
                console.error(`Erro: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
        }
    };

    document.addEventListener("keydown", (event) => {
        const forward = ["ArrowRight", "PageDown", " ", "Enter"];
        const backward = ["ArrowLeft", "PageUp", "Backspace"];

        if (forward.includes(event.key)) {
            event.preventDefault();
            goTo(currentIndex + 1);
        } else if (backward.includes(event.key)) {
            event.preventDefault();
            goTo(currentIndex - 1);
        } else if (event.key.toLowerCase() === "f") {
            event.preventDefault();
            toggleFullscreen();
        } else if (event.key === "Home") {
            event.preventDefault();
            goTo(0);
        } else if (event.key === "End") {
            event.preventDefault();
            goTo(slides.length - 1);
        }
    });

    update();
});
