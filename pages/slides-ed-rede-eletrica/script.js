document.addEventListener('DOMContentLoaded', () => {
    const trilha = document.querySelector('.trilha-slides');
    const slides = document.querySelectorAll('.slide');
    const btnProx = document.querySelector('.next');
    const btnAnt = document.querySelector('.prev');
    const barraProgresso = document.querySelector('.barra-progresso');

    let slideAtual = 0;
    const totalSlides = slides.length;

    function atualizarSlide() {
        trilha.style.transform = `translateX(-${slideAtual * 100}%)`;

        slides.forEach((slide, index) => {
            if (index === slideAtual) {
                slide.classList.add('ativo');
            } else {
                slide.classList.remove('ativo');
            }
        });

        const porcentagem = ((slideAtual + 1) / totalSlides) * 100;
        barraProgresso.style.width = `${porcentagem}%`;
    }

    function proximoSlide() {
        if (slideAtual < totalSlides - 1) {
            slideAtual++;
            atualizarSlide();
        }
    }

    function slideAnterior() {
        if (slideAtual > 0) {
            slideAtual--;
            atualizarSlide();
        }
    }

    btnProx.addEventListener('click', proximoSlide);
    btnAnt.addEventListener('click', slideAnterior);

    window.toggleFullscreen = function() {
        const shell = document.querySelector('.container-slides');
        if (!document.fullscreenElement) {
            shell.requestFullscreen().catch(err => {
                console.error(`Erro: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
        }
    };

    document.addEventListener('keydown', (e) => {
        const forward = ['ArrowRight', 'PageDown', ' ', 'Enter'];
        const backward = ['ArrowLeft', 'PageUp', 'Backspace'];

        if (forward.includes(e.key)) {
            e.preventDefault();
            proximoSlide();
        } else if (backward.includes(e.key)) {
            e.preventDefault();
            slideAnterior();
        } else if (e.key.toLowerCase() === 'f') {
            e.preventDefault();
            toggleFullscreen();
        }
    });

    atualizarSlide();
});
