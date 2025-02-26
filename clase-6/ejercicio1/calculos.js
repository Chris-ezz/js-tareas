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