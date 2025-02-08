const $form = document.querySelector('#carta-a-santa');

//  id="carta-a-santa".name="nombre".valor
const nombre = $form.nombre.value;
//                 name="formulario".name="nombre".y su valor
//const nombre = document.formulario.nombre.value;

//const ciudad = $form.ciudad.value;
const ciudad = document.formulario.ciudad.value;

//const comportamiento = $form.comportamiento.value;
const comportamiento = document.formulario.comportamiento.value;

//Aqui usamos brackets notation para el caso especial del name="descripcion-regalo"
//const descripcionRegalo = $form['descripcion-regalo'].value;
const descripcionRegalo = document.formulario['descripcion-regalo'].value;

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }
    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }

    return "";
}