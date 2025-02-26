document.querySelector('#agregar-integrantes').onclick = function(event) {
    const $cantidadIntegrantes = document.querySelector('#grupo-familiar');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    const numIngresado = validarCantidadIntegrantes(cantidadIntegrantes);
    const esExito = errorCantIntegrantes(numIngresado) === 0;

    if (esExito){
        borrarIntegrantes();
        crearGrupoFamiliar(cantidadIntegrantes);
    }

    event.preventDefault();
}

document.querySelector('#calcular').onclick = function(event) {
    const edades = obtenerEdades();
    const erroresEdades = validarEdades(edades);

    const esExito = calcularErroresEdades(erroresEdades) === 0;
    if (esExito) {
        mostrarEdad('mayor', obtenerEdadMayor(edades));
        mostrarEdad('menor', obtenerEdadMenor(edades));
        mostrarEdad('promedio', obtenerEdadPromedio(edades));
    
        mostrarResultado();
    }
    
    event.preventDefault();
}

document.querySelector('#resetear').onclick = resetear;

function crearGrupoFamiliar(cantIntegrante) {
    if (cantIntegrante > 0){
        mostrarBotonCalcular();
        mostrarBotonResetear();
    } else {
        resetear();
    }

   for (let i = 0; i < cantIntegrante; i++) {
        crearIntegrantes(i);
   } 
}

function crearIntegrantes(cantidad) {
    const $label = document.createElement('label');
    $label.textContent = `Integrante N°${(cantidad + 1)} - `;

    const $input = document.createElement('input');
    $input.type = 'number';
    $input.placeholder = 'Ingresa tu edad';

    const $div = document.createElement('div');
    $div.className = 'integrante';
    $div.appendChild($label);
    $div.appendChild($input);

    const $grupoFamiliar = document.querySelector('#familia');
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

function borrarIntegrantes() {
    const $integrante = document.querySelectorAll('.integrante');

    for (let i = 0; i < $integrante.length; i++) {
        $integrante[i].remove();
    }
}

function resetear() {
    borrarErroresAnteriores()
    borrarIntegrantes();
    ocultarBotonCalcular();
    ocultarResultado();
    ocultarBotonResetear();
}

function mostrarEdad(texto, valor) {
    document.querySelector(`#${texto}-edad`).textContent = `${valor}`;
}

function mostrarBotonCalcular() {
    document.querySelector('#calcular').className = '';
}

function ocultarBotonCalcular() {
    document.querySelector('#calcular').className = 'oculto';
}

function mostrarResultado() {
    document.querySelector('#resultado').className = '';
}

function ocultarResultado() {
    document.querySelector('#resultado').className = 'oculto';
}

function mostrarBotonResetear() {
    document.querySelector('#resetear').className = '';
}

function ocultarBotonResetear() {
    document.querySelector('#resetear').className = 'oculto';
}

function validarCantidadIntegrantes(cantidad) {
    if (cantidad === 0) {
        return 'La cantidad de integrantes no puede ser cero';
    } else if (cantidad <= -1) {
        return 'La cantidad de integrantes no puede ser un número negativo'
    } else if (!/^[1-9][0-9]*$/.test(cantidad.toString())) {
        return 'La cantidad de integrantes no puede tener punto decimal';
    } else {
        return '';
    }
}

function validarEdades(edades) {
    let mensajeEdades = [];

    for (let i = 0; i < edades.length; i++) {
        if (edades[i] === 0) {
            mensajeEdades.push('La edad no puede ser cero');
        } else if (edades[i] <= -1) {
            mensajeEdades.push('La edad no puede ser un número negativo');
        }else if (!/^[1-9][0-9]*$/.test(edades[i].toString())) {
            mensajeEdades.push('El campo edades no puede contener números con punto decimal');
        } else {
            mensajeEdades.push('');
        }
    }

    return mensajeEdades;
}

function errorCantIntegrantes(cantIntegrante) {
    borrarErroresAnteriores()

    let cantidadError = 0;

    if (cantIntegrante) {
        cantidadError++;
        document.querySelector('#grupo-familiar').className = 'error';
        mostrarErrores(cantIntegrante);
    } else {
        document.querySelector('#grupo-familiar').className = '';
    }

    return cantidadError;
}

function calcularErroresEdades(mensajeEdades) {
    const $inputs = document.querySelectorAll('.integrante input');
    
    let cantidadErrores = 0;

    mensajeEdades.forEach(function(mensaje, indice) {
        const $input = $inputs[indice];
        if(mensaje) {
            cantidadErrores++;
            $input.className = 'error';
            mostrarErrores(mensaje);
        } else {
            $input.className = '';
        }
    });

    return cantidadErrores;
}

function mostrarErrores(mensaje) {
    const $errores = document.querySelector('#errores');
    
    const $error = document.createElement('li');
    $error.textContent = mensaje;

    $errores.appendChild($error);
}

function borrarErroresAnteriores() {
    const $errores = document.querySelectorAll('#errores li');

    $errores.forEach(error => error.remove());
}