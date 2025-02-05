function obtenerSalarioAnualMayor(salarioAnual) {
    let salarioAnualMayor = salarioAnual[0];

    for (let i = 0; i < salarioAnual.length; i++) {
        if (salarioAnual[i] > salarioAnualMayor){
            salarioAnualMayor = salarioAnual[i];
        }
    }

    return salarioAnualMayor;
}

function obtenerSalarioAnualMenor(salarioAnual) {
    let salarioAnualMenor = salarioAnual[0];

    for (let i = 0; i < salarioAnual.length; i++) {
        if (salarioAnual[i] < salarioAnualMenor) {
            salarioAnualMenor = salarioAnual[i];
        }
    }

    return salarioAnualMenor;
}

function obtenerSalarioAnualPromedio(salarioAnual) {
    let totalSalario = 0;

    for (let i = 0; i < salarioAnual.length; i++) {
        totalSalario += salarioAnual[i];
    }

    return totalSalario / salarioAnual.length;
}

function obtenerSalarioMensual(salarioAnual) {
    const SALARIO_MENSUAL = [];

    for (let i = 0; i < salarioAnual.length; i++) {
        SALARIO_MENSUAL.push(salarioAnual[i] / 12);
    }

    return SALARIO_MENSUAL;
}

function obtenerSalarioMensualPromedio(salarioMensual) {
    let totalSalario = 0;

    for (let i = 0; i < salarioMensual.length; i++) {
        totalSalario += salarioMensual[i];
    }

    return totalSalario / salarioMensual.length;
}