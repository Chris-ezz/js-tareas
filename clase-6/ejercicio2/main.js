let contador = 0;
crearParrafosSalarios();

document.querySelector('#agregar-integrante').onclick = function() {
    contador++;
    crearIntegrante(contador);

    if (contador > 0) {
        mostrarBotonQuitarIntegrantes();
        mostrarBotonCalcular();
    }
    return false;
}

document.querySelector('#quitar-integrante').onclick = function() {
    
    if (contador > 0) {
        contador--;
        borrarIntegrante(contador);
        ocultarResultado();
    }

    if (contador === 0){
        ocultarBotonQuitarIntegrantes();
        ocultarBotoncalcular();
    }

    return false;
}

document.querySelector('#calcular').onclick = function() {
    const SALARIOS_ANUALES = obtenerSalarios();
    const SALARIOS_MENSUALES = obtenerSalarioMensual(SALARIOS_ANUALES);
 
    obtenerResultado('mayor', 'anual', obtenerSalarioAnualMayor(SALARIOS_ANUALES));
    obtenerResultado('menor', 'anual', obtenerSalarioAnualMenor(SALARIOS_ANUALES));
    obtenerResultado('anual', 'promedio', obtenerSalarioAnualPromedio(SALARIOS_ANUALES));
    obtenerResultado('mensual', 'promedio', obtenerSalarioMensualPromedio(SALARIOS_MENSUALES));

    mostrarResultado();
    return false;
}

function crearIntegrante(contador) {
    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = `Ingrese su salario anual integrante #${contador}: $`;

    const $input = document.createElement('input');
    $input.type = 'number';

    const $br = document.createElement('br');

    $div.appendChild($label);
    $div.appendChild($input);
    $div.appendChild($br);

    const $familiares = document.querySelector('#familiares');
    $familiares.appendChild($div);
}

function crearParrafosSalarios() {
    const $resultado = document.querySelector('#resultado');

    const $p1 = document.createElement('p');
    $p1.id = 'mayor-salario';
    $p1.textContent = 'Mayor salario anual';

    const $p2 = document.createElement('p');
    $p2.id = 'menor-salario';
    $p2.textContent = 'Menor salario anual';

    const $p3 = document.createElement('p');
    $p3.id = 'anual-salario';
    $p3.textContent = 'Salario anual promedio';

    const $p4 = document.createElement('p');
    $p4.id = 'mensual-salario';
    $p4.textContent = 'Salario mensual promedio';

    $resultado.appendChild($p1);
    $resultado.appendChild($p2);
    $resultado.appendChild($p3);
    $resultado.appendChild($p4);
}

function borrarIntegrante(contador) {
    const $integrante = document.querySelectorAll('.integrante');
    $integrante[contador].remove();
}

function obtenerSalarios() {
    const $salarioIntegrantes = document.querySelectorAll('.integrante input');
    const SALARIOS = [];

    for (let i = 0; i < $salarioIntegrantes.length; i++) {
        if (Number($salarioIntegrantes[i].value) !== 0) {
            SALARIOS.push(Number($salarioIntegrantes[i].value));
        }
    }

    return SALARIOS;
}

function obtenerResultado(texto, texto2, valor) {
    document.querySelector(`#${texto}-salario`).textContent = `Salario ${texto} ${texto2} es: $${valor}`;
}

function ocultarResultado() {
    document.querySelector('#resultado').hidden = true;
}
function mostrarResultado() {
    document.querySelector('#resultado').hidden = false;
}

function ocultarBotoncalcular() {
    document.querySelector('#calcular').hidden = true;
}
function mostrarBotonCalcular() {
    document.querySelector('#calcular').hidden = false;
}

function ocultarBotonQuitarIntegrantes() {
    document.querySelector('#quitar-integrante').hidden = true;
}
function mostrarBotonQuitarIntegrantes() {
    document.querySelector('#quitar-integrante').hidden = false;
}