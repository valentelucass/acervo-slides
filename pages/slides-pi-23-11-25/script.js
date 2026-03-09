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

    // Teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            proximoSlide();
        } else if (e.key === 'ArrowLeft') {
            slideAnterior();
        }
    });

    // Inicializa
    atualizarSlide();

    // --- Lógica do Smartwatch (Relógio em Tempo Real) ---
    function atualizarRelogio() {
        const agora = new Date();

        // Hora
        const horas = String(agora.getHours()).padStart(2, '0');
        const minutos = String(agora.getMinutes()).padStart(2, '0');
        const elementoHora = document.querySelector('.watch-time');
        if (elementoHora) {
            elementoHora.innerText = `${horas}:${minutos}`;
        }

        // Data (Ex: DOM 23)
        const diasSemana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
        const diaSemana = diasSemana[agora.getDay()];
        const diaMes = agora.getDate();
        const elementoData = document.querySelector('.watch-date');
        if (elementoData) {
            elementoData.innerText = `${diaSemana} ${diaMes}`;
        }
    }

    // Atualiza a cada segundo
    setInterval(atualizarRelogio, 1000);
    atualizarRelogio(); // Chama imediatamente
});
