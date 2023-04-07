// ARRAYS

// Un array es una estructura de datos que permite almacenar una serie de datos localizados por índices y separados por comas.

// INDICES

// El índice es la forma en que accedemos a los elementos de los arrays. En JavaScript, los índices empiezan desde 0, es decir, la primera posición es el índice 0. Un array se inicia mediante la sintaxis de corchetes [] y es tipo de dato objeto.

// Se asigna una variable al array para poder acceder a los índices por medio de la variable

var frutas = [];

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);

// Para saber la cantidad de datos que tiene un Array, se usa el termino ".length" despues de llamar el array por su variable asignada

console.log(frutas.length);

// MÉTODOS

// Los métodos de arrays son funcionalidades extra. Es semejante a las funciones, pero se accede mediante la notación punto array.metodo(argumentos). Existe PUSH, UNSHIFT, POP, SHIFT, INDEXOF

// Push es para añadir elementos al Array

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

var masFrutas = frutas.push("Uvas")

// Pop es para eliminar el último elemento del Array

var ultimo = frutas.pop("Uvas")

// Unshift, se usa para añadir valores al array, pero en la primera posición de la lista

var nuevaLongitud = frutas.unshift("Uvas")

// Shift, extrae el elemento del inicio del array original.

var borrarFruta = frutas.shift("Uvas")

// IndexOf, muestra el índice del elemento especificado como argumento

var posicion = frutas.indexOf("Cereza")