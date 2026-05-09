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

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            proximoSlide();
        } else if (e.key === 'ArrowLeft') {
            slideAnterior();
        }
    });

    atualizarSlide();
});
