document.querySelector('#agregar-familiares').onclick = function() {
    const $familiares = Number(document.querySelector('#grupo-familiar').value); 
    
    crearGrupoFamiliar($familiares);

    return false;
}

document.querySelector('#calcular').onclick = function() {
    const edades = obtenerEdades();
    const edadMayor = obtenerEdadMayor(edades);
    const edadMenor = obtenerEdadMenor(edades);
    const edadPromedio = obtenerEdadPromedio(edades);

    const $resultado = document.querySelector('#resultado');

    const $mayorEdad = document.createElement('p');
    const $menorEdad = document.createElement('p');
    const $promedioEdad = document.createElement('p');

    $mayorEdad.textContent = `El mayor de la familia tiene ${edadMayor} años`;
    $menorEdad.textContent = `El menor de la familia tiene ${edadMenor} años`;
    $promedioEdad.textContent = `El promedio de edad es de: ${edadPromedio}`;

    $resultado.appendChild($mayorEdad);
    $resultado.appendChild($menorEdad);
    $resultado.appendChild($promedioEdad);

    mostrarResultado();
    mostrarBorrarIntegrantes();

    return false;
}

document.querySelector('#resetear').onclick = function() {
    borrarGrupoFamiliar();
    ocultarBotonCalcular();
    ocultarResultado();
    ocultarBorrarIntegrantes();
    return false;
}

function crearGrupoFamiliar(cantIntegrante) {
    if (cantIntegrante > 0){
        mostrarBotonCalcular();
    }


   for (let i = 0; i < cantIntegrante; i++) {
        crearIntegrante(i);
   } 
}

function crearIntegrante(cantidad) {
    const $grupoFamiliar = document.querySelector('#familia');
    const $div = document.createElement('div');
    const $label = document.createElement('label');
    const $input = document.createElement('input');

    $div.className = 'integrante';
    $label.textContent = `Integrante N°${(cantidad + 1)} - `;
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

function borrarGrupoFamiliar() {
    const $integrante = document.querySelectorAll('.integrante');

    for (let i = 0; i < $integrante.length; i++) {
        $integrante[i].remove();
    }
}

function mostrarBotonCalcular() {
    document.querySelector('#calcular').hidden = false;
}

function ocultarBotonCalcular() {
    document.querySelector('#calcular').hidden = true;
}

function mostrarResultado() {
    document.querySelector('#resultado').hidden = false;
}

function ocultarResultado() {
    document.querySelector('#resultado').hidden = true;
}

function mostrarBorrarIntegrantes() {
    document.querySelector('#resetear').hidden = false;
}

function ocultarBorrarIntegrantes() {
    document.querySelector('#resetear').hidden = true;
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
        totalEdad += edades[i]; 
    }

    return totalEdad / edades.length;
}