// FUNCION CONSTRUCTORA

// Existe un problema al momento de construir varios objetos a partir de un código base, los atributos deben cambiar con respecto a la nueva información. Para esto se utiliza una función constructora. Una función constructora sirve para crear varios objetos a partir de nueva información, esto es recibido argumentos.

function auto(marca, modelo, año){
    this.marca = marca;
    this. modelo = modelo;
    this.año = año;
};

// Para generar el nuevo objeto se usa la siguiente sintaxis

var autoNuevo = new  auto("Tesla", "Model 3", 2020)
var autoNuevo2 = new  auto("Tesla", "Model X", 2018)
var autoNuevo3 = new  auto("Nissan", "GTR", 2021)


var marca = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",	
   "Cadillac",
    "Caterham",
    "Chevrolet",
    "Citroen",
    "Dacia",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Infiniti",
    "Isuzu",
    "Iveco",
    "Jaguar"   	 	 
]

var modelo = [
    "C-Max",
    "Fiesta",
    "Focus",
    "Mondeo",
    "Ka",
    "S-MA",
   " B-MAX",
    "Grand C-Max",
    "Tourneo Custom",
    "Kuga",
    "Galaxy",
    "Grand Tourneo Connect",
    "Tourneo Connect",
    "EcoSport",
    "Tourneo Courier",
    "Mustang",
    "Transit Connect",
    "Edge",
    "Ka+"
]

var año = [
    "1988",
    "1989",
    "1978",
    "1989",
    "1928",
    "1989",
    "1968",
    "1989",
    "1888",
    "1989",
    "1288",
    "1989",
    "1938",
    "1989",
    "1988",
    "1999",
    "1983",
    "1989",
    "1918"
]

function auto(marca, modelo, año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año}

while(marca.length > 0 && modelo.length > 0 && año.length > 0){
    var crearAuto = new auto(marca[0], modelo[0], año[0]);
    marca.shift();
    modelo.shift();
    año.shift();
    console.log(`Este es el carro ${marca[0]}, ${modelo[0]} del año ${año[0]}`)
}

