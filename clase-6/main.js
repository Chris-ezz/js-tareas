document.querySelector('#agregar-familiares').onclick = function() {
    const $familiares = Number(document.querySelector('#grupo-familiar').value); 
    
    agregarFamiliares($familiares);

    return false;
}

document.querySelector('#calcular').onclick = function() {
    const edades = obtenerEdades();
    const edadMayor = obtenerEdadMayor(edades);
    const edadMenor = obtenerEdadMenor(edades);
    const edadPromedio = obtenerEdadPromedio(edades);

    document.querySelector('#mayor').textContent = `El mayor del grupo familiar tiene ${edadMayor} años`;
    document.querySelector('#menor').textContent = `El menor del grupo familiar tiene ${edadMenor} años`;
    document.querySelector('#promedio').textContent = `El promedio de edad es: ${edadPromedio} `;

    return false;
}

function agregarFamiliares(cantFamiliares) {
    for (let i = 0; i < cantFamiliares; i++) {
        crearIntegrantes(i);
    }

}

function crearIntegrantes(cantidad) {
    const $grupoFamiliar = document.querySelector('#familia');
    const $div = document.createElement('div');
    const $label = document.createElement('label');
    const $input = document.createElement('input');

    $div.className = 'integrante';
    $label.textContent = 'Integrante N°' + (cantidad + 1);
    $input.type = 'number';
    $input.placeholder = 'Ingresa tu edad';

    $div.appendChild($label);
    $div.appendChild($input);

    $grupoFamiliar.appendChild($div);
}

function obtenerEdades() {
    const $edadIntegrantes = document.querySelectorAll('.integrante input');
    const edades = [];

    for (let i = 0; i < $edadIntegrantes.length; i++) {
        edades.push(Number($edadIntegrantes[i].value));
    }

    return edades;
}

function obtenerEdadMayor(edades) {
    let mayorEdad = edades[0];

    for (let i = 0; i < edades.length; i++) {
        if (edades[i] > mayorEdad) {
            mayorEdad = edades[i];
        }
    }

    return mayorEdad;
}

function obtenerEdadMenor(edades) {
    let menorEdad = edades[0];

    for (let i = 0; i < edades.length; i++) {
        if (edades[i] < menorEdad) {
            menorEdad = edades[i];
        }
    }

    return menorEdad;
}

function obtenerEdadPromedio(edades) {
    let totalEdad = 0;

    for (let i = 0; i < edades.length; i++) {
        edadesSumadas += edades[i]; 
    }

    return totalEdad / edades.length;
}