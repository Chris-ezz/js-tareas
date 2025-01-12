function calcularSalarioMensual(salarioAnual) {
    return salarioAnual / 12;
}

const $botonCalcular = document.querySelector('#calcular-salario-mensual');

$botonCalcular.onclick = function() {
    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    const salarioMensual = calcularSalarioMensual(salarioAnual);
    const resultado = document.querySelector('#salario-mensual');

    resultado.value = salarioMensual;

    return false;
}

/*
document.querySelector('#calcular-salario-mensual').onclick = function() {
    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    const salarioMensual = calcularSalarioMensual(salarioAnual);

    document.querySelector('#salario-mensual').value = salarioMensual;

    return false;
}
*/