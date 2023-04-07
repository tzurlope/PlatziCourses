// Loops con WHILE, Para el ciclo while no conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones. Aunque también se puede acoplar para que realice un determinado número de repeticiones.

// La estructura del ciclo while es la siguiente:

while (condición) {
    // Bloque de código
    // Cambiar la condición para salir del bucle
}

var estudiantes = ["Maria", "Tzuriel", "Sergio", "Brian", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}