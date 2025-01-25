function convertirANumeros(nodoList) {
    const numeros = []

    for (let i = 0; i < nodoList.length; i++) {
        numeros.push(Number(nodoList[i].textContent));
    }

    return numeros
}

function calcularPromedio(numeros) {
    let totalSuma = 0;

    for (let i = 0; i < numeros.length; i++) {
        totalSuma += numeros[i];
    }

    return totalSuma / numeros.length;
}

function obtenerMenorNum(numeros) {
    let numMenor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] < numMenor) {
            numMenor = numeros[i];
        } 

    }

    return numMenor;
}

function obtenerMayorNum(numeros) {
    let numMayor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] > numMayor) {
            numMayor = numeros[i];
        }

    }

    return numMayor;
}

function obtenerNumFrecuente(numeros) {
    let cantRepeticiones = 0;
    let numFrecuente;

    for (let i = 0; i < numeros.length; i++) {
        let contadorRep = 0;

        for (let j = 0; j < numeros.length; j++) {

            if (numeros[i] === numeros[j]) {
                contadorRep++;
            } 

        }

        if (contadorRep > cantRepeticiones) {
            cantRepeticiones = contadorRep;
            numFrecuente = numeros[i];
        }

    }

    return numFrecuente;
}


document.querySelector('#calcular').onclick = function() {
    const $listaNodo = document.querySelectorAll('li');
    const listaNumeros = convertirANumeros($listaNodo);

    const promedio = calcularPromedio(listaNumeros);
    const numMenor = obtenerMenorNum(listaNumeros);
    const numMayor = obtenerMayorNum(listaNumeros);
    const numRepetido = obtenerNumFrecuente(listaNumeros);
    
    document.querySelector('#promedio').textContent = `El promedio de la lista de números es: ${promedio}`;
    document.querySelector('#pequeño').textContent = `El número más pequeño en la lista de números es: ${numMenor}`;
    document.querySelector('#grande').textContent = `El número más grande en la lista de números es: ${numMayor}`;
    document.querySelector('#repetido').textContent = `El número más frecuente en la lista de números es: ${numRepetido}`;


    return false
}
