function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );

  console.assert(
    validarNombre(
        '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

function probarValidarCiudad() {
    console.assert(validarCiudad('') === 'Este campo no debe quedar vacío',
    'Validar ciudad no validó que el campo no quedara vacío',
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo('') === 'Este campo no debe quedar vacío',
    'Validar descripcion regalo no validó que el campo no quedara vacío',
    );

    console.assert(validarDescripcionRegalo('22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222') === 'Este campo debe tener menos de 100 caracteres',
    'Validar descripcion regalo no validó que la descripción sea menor a 100 caracteres',
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
