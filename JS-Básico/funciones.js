// Las funciones son conjutnts de sentencias que podes utilizar para generar acciones con los valores que ya guardamos en las variables

// Tipos de funciones

    // Declarativas, se escribe la palabra reservada function, el nombre de la función, paréntesis y corchetes

    function miFuncion() {
    return 3
}

miFuncion();


// Expresión, se declara una variable que va a ser igual a na función. Entre los paréntesis se ponen los parámetros necesarios para correr la función

    var miFuncion = function(a,b) {
        return a + b;
    }
    
miFuncion();

// Diferencias:

// A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.
// Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.
