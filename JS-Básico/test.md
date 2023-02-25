# Test de JavaScript

¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. **Puedes hacer trampa y saltar a la siguiente clase**, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al [Curso Básico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que **el éxito no se mide por cuánto tiempo te toma aprender**, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

Son espacios reservados en memoria para guardar información dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

Cuando se declara la variable se crea la variable, pero no se le asigna un valor. En cambio, inicializar es asignarle un valor a esa variable

```
//Declarar
var nombre;

//Inicializar
var nombre = "Tzuriel";
```

- ¿Cuál es la diferencia entre sumar números y concatenar strings?

Sumar números hace una operación matemática, en cambio sumar strings hace una concatenación

- ¿Cuál operador me permite sumar o concatenar?

Se usa el operador "+"

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: string
- Edad: number
- Correo electrónico: string
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
var nombre = "Tzuriel";
var apellido = "Lopez";
var username = "tzurlope";
var edad = 22;
var correoElectrónico = "tzuriel.lm@hotmail.com";
var mayordeEdad = true;
var dineroAhorrado = 5000;
var deudas = 1000;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
var nombreCompleto = `${nombre} ${apellido}`;
var dineroReal = dineroAhorrado - deudas
```

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?

Conjuntos de sentencias que podes utilizar para generar acciones con los valores que ya guardamos en las variables

- ¿Cuándo me sirve usar una función en mi código?

Cuando quiero dejar establecido un proceso que se debe llevar a cabo según mis parámetros

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

Los parámetros son los datos necesarios y que se deben proporcionar para llevar a cabo la función con éxito. Los argumentos son los pasos a seguir en la función.

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```

function itsMe(name, lastname, nickname) {
    console.log(`Mi nombre es ${name} ${lastname}, pero prefiero que me digas ${nickname}`);
}
itsMe("Tzuriel", "López", "Tzu")
```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

Forma en que ejecutamos un bloque de código u utro, dependiendo de una validación

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

IF, IF...ELSE, SWITCH

El condicional switch nos permite validar si una condición se cumple comparándolo en distintos casos. En cambio con IF o IF...ELSE se pueden variar las condiciones que se validan en el momenti que se valida

- ¿Puedo combinar funciones y condicionales?

Las funciones pueden guardar cualquier bloque de código, incluyendo condicionales

El condicional switch nos permite validar si una condición se cumple comparándolo en distintos casos. En cambio con IF o IF...ELSE se pueden variar las condiciones que se validan en el momenti que se valida

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

SOLUCIÓN

```
const tipodeSuscripcion = "Basic";

function subscriptionType(tipodeSuscripcion) {
    if(tipodeSuscripcion === "Free") {
        console.log("Solo puedes tomar los cursos gratis")
    } else if(tipodeSuscripcion === "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
    } else if(tipodeSuscripcion === "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
    } else if(tipodeSuscripcion === "ExpertPlus") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
    } else {
        console.log("No tienes subscripción válida")
    }
}

```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

Es una forma de ejecutar un mismo bloque de código hasta que una condición se cumpla

- ¿Qué tipos de ciclos existen en JavaScript?

While, for, do while.

- ¿Qué es un ciclo infinito y por qué es un problema?

Cuando nuestra condicion o validación para terminar el ciclo nunca se cumple y el ciclo se repite infinitamente hasta generar un error

- ¿Puedo mezclar ciclos y condicionales?

Si, de porsi los ciclos incluyen condicionales. De todas formas se pueden ejecutar mas condicionales durante los ciclos o viceversa

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0;

while (i < 5) { 
    console.log("El valor de i es: " + i);
    i++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 10;

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

```
while (respuesta != 4) {
    let pregunta = prompt("¿Cuanto es 2 + 2?");
    respuesta = pregunta;
}

console.log("Respuesta correcta")
```


## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

Es una lista de elementos. Un conjunto de elementos.

```
const array = [1, 'jajaja', true, false];
```

- ¿Qué es un objeto?

Es una lista de elementos pero cada elemento tiene un nombre clave.

```
const obj = {
    nombre: 'Tzuriel',
    edad: 3,
};
```

- ¿Cuándo es mejor usar objetos o arrays?

Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demás. Pero un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Si, los arrays pueden guardar objetos y los objetos puedes guardar arrays entre sus propiedades

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```
var primerElemento = function(listArray) {
    console.log(`Hola ${listArray[0]}`)
}
primerElemento(['Tzuriel', 'Khaled', 'Einar', 'Beatriz'])
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```
var primerElemento = function(listArray) {
    for (var listItem of listArray){
        console.log(`Hola ${listItem}`)
    }
}
primerElemento(['Tzuriel', 'Khaled', 'Einar', 'Beatriz'])
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```
var objetoElementos = function(elementosDelObjeto) {
    var elementos = Object.values(elementosDelObjeto);
    for (var elemento of elementos){
        console.log(`El valor de este elemento es ${elemento}`)
    }
}
objetoElementos({
    nombre: 'Tzuriel',
    edad: 3,
    comidaFavorita: 'Carne',
})
```


## ¿Cómo te fue? 🏆

**¡Felicidades por completar la prueba de JavaScript!** Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuánto tiempo te tome. **Yo sé que tú puedes. Y tú deberías de saberlo también.**

¡Te espero en la siguiente clase para comenzar!