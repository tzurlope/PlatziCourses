// Scopes es el alcance que tiene una variable, dependiendo de donde se declare, asi mismo es donde se podra usar

// Tipos de Scope

// Scope Global, es lo que se declara al inicio del código y puede ser aplicado en todo el código

var nombre = "Tzuriel";

// Scope Local, es lo que se declara dentro de una función y solo se puede usar dentro de la función

function fun() {
    // Lo que esta dentro de la función se conoce como Scope Local
    var apellido = "López"
    return nombre + " " + apellido
}

// Desde mi Scope Local, voy a tener acceso a las variables en el Scope Global, pero si desde el Scope Global intento acceder al Scope Local no se va a poder
