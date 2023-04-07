// LOOPS

// Un bucle (loop) o ciclo repetitivo es una estructura de control que te permite realizar una o varias instrucciones mientras una condición sea verdadera.

// Existen dos tipos de ciclos repetitivos:

// For (para), para el ciclo for conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones. La estructura sería la siguiente:

for (var num = 1; num <= 10; num++) {
    console.log(i)
  }

// Esto se leería como: “Para (for) la variable num que inicia en 1 (num = 1) mientras sea menor o igual que 10 (num <= 10) en pasos de 1 (num++) ejecuta una o varias instrucciones (console.log)”.


var estudiantes = ["Maria", "Tzuriel", "Sergio", "Brian", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);

}

for(var i  = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}



// For ...of, el ciclo for ... of es una variación del ciclo for que se utiliza para recorrer los valores de los elementos de un array. La estructura del ciclo for ... of es la siguiente:

for ( var elemento of array){
    //Bloque de código
}


var estudiantes = ["Maria", "Tzuriel", "Sergio", "Brian", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);

}

for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante)
}