document.addEventListener('DOMContentLoaded', () => {
    const trilha = document.querySelector('.trilha-slides');
    const slides = document.querySelectorAll('.slide');
    const btnProx = document.querySelector('.next');
    const btnAnt = document.querySelector('.prev');
    const barraProgresso = document.querySelector('.barra-progresso');

    let slideAtual = 0;
    const totalSlides = slides.length;

    function atualizarSlide() {
        // Move a trilha
        trilha.style.transform = `translateX(-${slideAtual * 100}%)`;

        // Atualiza opacidade/classe ativo
        slides.forEach((slide, index) => {
            if (index === slideAtual) {
                slide.classList.add('ativo');
            } else {
                slide.classList.remove('ativo');
            }
        });

        // Atualiza barra de progresso
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

    // Event Listeners
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

    // Teclado
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
        } else if (e.key === 'Home') {
            e.preventDefault();
            slideAtual = 0;
            atualizarSlide();
        } else if (e.key === 'End') {
            e.preventDefault();
            slideAtual = totalSlides - 1;
            atualizarSlide();
        }
    });

    // Inicializa
    atualizarSlide();
});

