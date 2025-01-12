document.querySelector('#saludar-usuario').onclick = function() {
    const nombreUsuario = document.querySelector('#nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);

    document.querySelector('h1').textContent = `Bienvenido, ${nombreUsuario} ${apellidoUsuario}`;

    document.querySelector('#resultado').textContent = `${nombreUsuario} ${apellidoUsuario} ${edadUsuario} años`;

    return false;
}