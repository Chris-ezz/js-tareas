function convertirASegundos(hs, min, seg) {
    const HORAS = hs * 3600;
    const MINUTOS = min * 60;
    const SUMAR_SEGUNDOS = HORAS + MINUTOS + seg;

    return SUMAR_SEGUNDOS;
}

function convertirHsMinSeg(seg) {
    const HORAS = Math.floor(seg / 3600);
    const MINUTOS = Math.floor((seg - (HORAS * 3600)) / 60);
    const SEGUNDOS = seg - (HORAS * 3600) - (MINUTOS * 60);

    return `${HORAS}hs:${MINUTOS}min:${SEGUNDOS}seg`;
}

document.querySelector('#calcular-tiempo-total').onclick = function() {
    const hs = Number(document.querySelector('#horas1').value);
    const min = Number(document.querySelector('#minutos1').value);
    const seg = Number(document.querySelector('#segundos1').value);

    const hs2 = Number(document.querySelector('#horas2').value);
    const min2 = Number(document.querySelector('#minutos2').value);
    const seg2 = Number(document.querySelector('#segundos2').value);

    const hs3 = Number(document.querySelector('#horas2').value);
    const min3 = Number(document.querySelector('#minutos2').value);
    const seg3 = Number(document.querySelector('#segundos2').value);

    const hs4 = Number(document.querySelector('#horas2').value);
    const min4 = Number(document.querySelector('#minutos2').value);
    const seg4 = Number(document.querySelector('#segundos2').value);

    const hs5 = Number(document.querySelector('#horas2').value);
    const min5 = Number(document.querySelector('#minutos2').value);
    const seg5 = Number(document.querySelector('#segundos2').value);

    const segTotal = convertirASegundos(hs, min, seg);
    const segTotal2 = convertirASegundos(hs2, min2, seg2);
    const segTotal3 = convertirASegundos(hs3, min3, seg3)
    const segTotal4 = convertirASegundos(hs4, min4, seg4)
    const segTotal5 = convertirASegundos(hs5, min5, seg5)

    const sumaTotal = segTotal + segTotal2 + segTotal3 + segTotal4 + segTotal5; 

    const tiempoTotal = convertirHsMinSeg(sumaTotal);

    document.querySelector('#resultado').textContent = `El tiempo total de los videos es de ${tiempoTotal}`;

    return false;
}