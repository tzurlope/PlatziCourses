//  OBJECTS

// Un objeto es una estructura de datos que permite almacenar valores mediante propiedad - valor a través de la sintaxis de llaves ({}) y separados por comas. En las propiedades del objeto es opcional colocar las comillas. En el caso de que haya espacios, es obligatorio.

var objeto = {
    clave1: "valor1",
   "clave 2": "valor2",
};

var miAuto = {
    marca: "Ford",
    modelo: "Focus",
    "año": 2020,  
};

// Para traer el valor de una propiedad dentro de un objeto, indicamos con un punto la propiedad del objeto. Si existen espacios, la única forma de acceder a esa propiedad es mediante la notación de corchetes.

miAuto.marca;

miAuto['marca'];

// También se pueden usar funciones en las propiedades de los objetos

var miAuto = {
    marca: "Ford",
    modelo: "Focus",
    "año": 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.año}`)
    }
    // La palabra "this" hace referencia al objeto donde se escribe
};

// Y se invocan con la siguiente sintaxis

miAuto.detalleDelAuto();