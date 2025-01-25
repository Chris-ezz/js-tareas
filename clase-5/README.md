```JavaScript
//Para evitar que el formulario <form> se “mande” y por ende recargue la página, al event handler “onclick”, agréguentle un return false; al final de la función.
//Ejemplo:
const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function() {
    // código que se ejecuta cuando le hagan click a este elemento...
    return false;
}
```

Ejercicio 1: 
Crear un formulario donde un usuario pueda ingresar su salario anual.
Cuando el usuario haga click en el botón "calcular", mostrar el salario mensual en una caja de texto deshabilitada. --> `<input type="text" disabled id="salario-mensual"/>`.

Ejercicio 2:
Creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario también vamos a crear un `<h1>` que diga `Bienvenido!`. Vas a crear un botón de acción que una vez que lo apretás, va a mostrar toda la información junta en un campo de texto y va a cambiar el `<h1>` para decir `"Bienvenido, nombreDeUsuario!"`

```HTML
<!--Ejemplo form:-->
<form id="entrada-bar" onsubmit="return false;">
  <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
  <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
  <input type="submit" value="Ingresar" id="ingresar"/>
</form>

<div id="resultado">Hola</div>
```

Ejercicio 3:
Por cada clase de r/argentina programa existente, vamos a pedir:
horas, minutos y segundos de cada video. 
Ej: Si un video dura 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con cada dato. 
Al apretar el botón "Calcular tiempo total", debe mostrar en un `<strong>` pre-creado el tiempo total de los videos.

Ejercicio 4:
Crear una lista de `<ol>` y `<li>` que contengan sólo números.
Convertir esos números a un array y:
1. calcular el promedio y mostrarlo en un `<em>` pre-creado con el texto "El promedio es..."
2. obtener el número más pequeño y mostrarlo en un `<em>` pre-creado con el texto "El número más pequeño es..."
3. obtener el número más grande y mostrarlo en un `<em>` pre-creado con el texto "El número más grande es..."
4. obtener el número que más se repite y mostrarlo en un `<em>` pre-creado con el texto "El número más frecuente es.."