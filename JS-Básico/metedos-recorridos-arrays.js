// Metodos para recorrer ARRAYS

// Existen métodos de arrays para recorrerlos, y devolver un valor o un array con nuevos resultados. Entre estos están dos muy importantes: map y filter.

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
]

// FILTER, para encontrar los objetos de un array que cumplen una condición

// El método filter consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo. 

var otherArray = array.filter(function(), thisArg)

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
    });

// MAP, para buscar el valor de una propiedad dentro de los objetos de un array

// El método map es inmutable y consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback). 

var otherArray = array.map(function(), thisArg)

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

// FIND, para encontrar el primer objeto  dentro del Array que cumpla una condicion

// El método find consiste en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback). Si ningún elemento cumpla con la condición, retornará undefined.

array.find(function(), thisArg)

var algunArticulo = articulos.find(function(articulo){
    return (articulo.costo === 500);
});

// FOREACH, se usa para retornar el valor del objeto según se determine

// El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. Iterar significa repetir una acción varias veces. Este método no retorna ningún valor.

array.forEach(function(), thisArg)

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// SOME, se usa para hacer una validacion de true or false, si hay por lo menos un objeto en el array que cumpla la condición

// El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

array.some(function(), thisArg)

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
