// SWITCH

// La estructura switch es otra manera de evaluar condiciones, la diferencia con if es que las condiciones deben ser iguales a un caso o algo específico.

var numero = 1;

switch (numero) {
    case 1:
        console.log("Soy uno!");
        break;
    case 10:
        console.log("Soy un diez!");
        break;
    case 100:
        console.log("Soy un cien!");
        break;
    default:
        console.log("No sé que soy")
}


// Reto piedra, papel o tijera con SWITCH

var nombre1 = "Tzuriel";
var nombre2 = "Diego";

var jugador1 = "";
var jugador2 = "";

function resultado(jugador1, jugador2) {
    switch(true) {
        case (jugador1 == jugador2):
            console.log("Es un Empate")
            break
        case (jugador1 === "Piedra" && jugador2 === "Papel"):
            console.log("Gana " + nombre2 + " con " + jugador2)
            break
        case (jugador1 === "Piedra" && jugador2 === "Tijera"):
            console.log("Gana " + nombre1 + " con " + jugador1)
            break
        case (jugador1 === "Papel" && jugador2 === "Piedra"):
            console.log("Gana " + nombre1 + " con " + jugador1)
            break
        case (jugador1 === "Papel" && jugador2 === "Tijera"):
            console.log("Gana " + nombre2 + " con " + jugador2)
            break
        case (jugador1 === "Tijera" && jugador2 === "Piedra"):
            console.log("Gana " + nombre2 + " con " + jugador2)
            break
        case (jugador1 === "Tijera" && jugador2 === "Papel"):
            console.log("Gana " + nombre1 + " con " + jugador1)
            break
        default:
            console.log("Por favor entre una elección válida")   
    }
}

resultado(jugador1,jugador2)