AOS.init();

const dataAniversario = new Date("Jul 17, 2024 19:00:00");
const timeStampDoAniversario = dataAniversario.getTime();

const contaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAual = agora.getTime();

    const distanciaData = timeStampDoAniversario - timeStampAual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const hraEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasData = Math.floor(distanciaData / diaEmMs);
    const horasData = Math.floor((distanciaData % diaEmMs) / hraEmMs);
    const minutosData = Math.floor((distanciaData % hraEmMs) / minutoEmMs);
    const segundosData = Math.floor((distanciaData % minutoEmMs) / 1000)

    console.log(diasData);
    console.log(horasData);
    console.log(minutosData);
    console.log(segundosData)

    document.getElementById('days').innerHTML = `${diasData}`
    document.getElementById('hours').innerHTML = `${horasData}`
    document.getElementById('minuts').innerHTML = `${minutosData}`
    document.getElementById('seconds').innerHTML = `${segundosData}`

}, 1000)