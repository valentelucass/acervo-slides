document.addEventListener("DOMContentLoaded", () => {
    const slides = Array.from(document.querySelectorAll(".slide"));
    const indicator = document.getElementById("slide-indicator");
    const progressBar = document.getElementById("progress-bar");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;

    const formatIndex = (value) => String(value + 1).padStart(2, "0");
    const totalSlides = String(slides.length).padStart(2, "0");

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentIndex);
        });

        indicator.textContent = `${formatIndex(currentIndex)} / ${totalSlides}`;
        progressBar.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === slides.length - 1;
        document.title = `${slides[currentIndex].dataset.title} | Avaliacao de Estagio`;
    }

    function goToSlide(nextIndex) {
        if (nextIndex < 0 || nextIndex >= slides.length) {
            return;
        }

        currentIndex = nextIndex;
        updateSlides();
    }

    prevButton.addEventListener("click", () => goToSlide(currentIndex - 1));
    nextButton.addEventListener("click", () => goToSlide(currentIndex + 1));

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
            event.preventDefault();
            goToSlide(currentIndex + 1);
        }

        if (event.key === "ArrowLeft" || event.key === "PageUp") {
            event.preventDefault();
            goToSlide(currentIndex - 1);
        }

        if (event.key === "Home") {
            event.preventDefault();
            goToSlide(0);
        }

        if (event.key === "End") {
            event.preventDefault();
            goToSlide(slides.length - 1);
        }
    });

    updateSlides();
});
