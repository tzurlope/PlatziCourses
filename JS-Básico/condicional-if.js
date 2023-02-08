// CONDICIONAL IF

// Los condicionales son estructuras de control que te permiten evaluar diferentes expresiones y realizar determinadas acciones en JavasScript.

// El condicional IF evalua si el valor que se encuentra dentro de los () es verdadero, ELSE se usa para establecer la acción a tomar si el valor no es verdadero

if (true) {
    console.log("Hola")
} else {
    console.log("Soy falso")
}

// Se usa el ELSE IF cuando se quieren añadir condiciones extras para validar en caso de que la primer condición no se cumpla, se hace la validación en el mismo orden que se añaden las condiciones en el código

var edad = 18;

if(edad === 18) {
    console.log("Puedes votar, será tu primera votación")
} else if(edad > 18) {
    console.log("Puedes votar de nuevo")
} else {
    console.log("Aún no puedes votar")
}

// Operador ternario syntaxis "condition ? true : false"

var numero = 1

var resultado = numero === 1 ? "Si soy un 1" : "No soy un 1"




// Reto de Piedra, Papel o Tijera



var nombre1 = "Tzuriel";
var nombre2 = "Diego";

var jugador1 = "";
var jugador2 = "";

function resultado(jugador1, jugador2) 
{
    if(jugador1 == jugador2) {
        console.log("Es un Empate")
    } else if (jugador1 === "Piedra" && jugador2 === "Papel") {
        console.log("Gana " + nombre2 + " con " + jugador2) 
    } else if (jugador1 === "Piedra" && jugador2 === "Tijera") {
        console.log("Gana " + nombre1 + " con " + jugador1) 
    } else if (jugador1 === "Papel" && jugador2 === "Piedra") {
        console.log("Gana " + nombre1 + " con " + jugador1) 
    } else if (jugador1 === "Papel" && jugador2 === "Tijera") {
        console.log("Gana " + nombre2 + " con " + jugador2) 
    } else if (jugador1 === "Tijera" && jugador2 === "Piedra") {
        console.log("Gana " + nombre2 + " con " + jugador2) 
    } else if (jugador1 === "Tijera" && jugador2 === "Papel") {
        console.log("Gana " + nombre1 + " con " + jugador1) 
    } else {
        console.log("Por favor entre una elección válida")
    }

}

resultado(jugador1,jugador2)