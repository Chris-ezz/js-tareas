function probarValidarCantidadIntegrantes() {
    console.assert(
        validarCantidadIntegrantes(0) === 'La cantidad de integrantes no puede ser cero',
        'Validar la cantidad de integrantes no valido que al menos se ingrese un integrante'
    );

    console.assert(
        validarCantidadIntegrantes(-1) === 'La cantidad de integrantes no puede ser un número negativo',
        'Validar la cantidad de integrantes no valido que se ingrese un número correcto'
    );

    console.assert(
        validarCantidadIntegrantes(15.5) === 'La cantidad de integrantes no puede tener punto decimal',
        'Validar la cantidad de integrantes no valido que no se ingresara un número con punto decimal'
    );

    console.assert(
        validarCantidadIntegrantes(1) === '',
        'Validar cantidad de integrantes fallo con un número válido de integrantes'
    );
}

function probarValidarEdades() {
    console.assert(
        validarEdades([10, 20, 0]) === 'El campo edades no puede ser cero',
        'Validar edad no valido que el usuario ingresara su edad'
    );

    console.assert(
        validarEdades([15, 20, -1]) === 'La edad no puede ser un número negativo',
        'Validar edad no valido que usuario no ingrasara un número negativo'
    );

    console.assert(
        validarEdades([15, 25, 10.5]) === 'El campo edades no puede contener números con punto decimal',
        'Validar edades no valido que las edades no tengan punto decimal'
    );

    console.assert(
        validarEdades([15, 25, 10]) === '',
        'Validar edades no valido con edades correctas'
    );
}

probarValidarCantidadIntegrantes();
//probarValidarEdades();