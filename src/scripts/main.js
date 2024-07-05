AOS.init();

const dataAniversario = new Date("Jul 17, 2024 19:00:00");
const timeStampDoAniversario = dataAniversario.getTime();

const contaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaData = timeStampDoAniversario - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const hraEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasData = Math.floor(distanciaData / diaEmMs);
    const horasData = Math.floor((distanciaData % diaEmMs) / hraEmMs);
    const minutosData = Math.floor((distanciaData % hraEmMs) / minutoEmMs);
    const segundosData = Math.floor((distanciaData % minutoEmMs) / 1000);

    document.getElementById('days').innerHTML = `${diasData}`;
    document.getElementById('hours').innerHTML = `${horasData}`;
    document.getElementById('minuts').innerHTML = `${minutosData}`;
    document.getElementById('seconds').innerHTML = `${segundosData}`;

    if (distanciaData < 0) {
        clearInterval(contaTempo);
        const mensagem = document.querySelector('.timing__counting--list-hidden_item');

        // Esconde os contadores
        document.querySelectorAll('.timing__counting--list-item').forEach(item => {
            item.style.display = 'none';
        });

        // Mostra a mensagem de que o evento já passou
        mensagem.style.display = 'block';
    } else {
    }
});
