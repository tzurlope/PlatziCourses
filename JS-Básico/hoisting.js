// HOISTING

// Es cuando las variables y las funciones se declaran antes de que se procesen en cualquier tipo de código. Esto solo pasa con versiones pasadas de JS, de la 5 hacia atrás. Ejemplo: Se usa una variable en una función y después se declara, o se usa una función y después se declara lo que hace la función.

var miNombre;
miNombre = "Tzuriel";


hey();

function hey() {
    console.log("hola " + miNombre)
}