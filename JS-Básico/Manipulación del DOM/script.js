console.log('Hello, World')


// Para seleccionar como variable elementos del HTML se usa la funcon querySelector yentre corchetes y comillas el nombre del label, class o id y se usa igual que en CSS

const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});


// .innerHTML se usa para reemplazar codigo HTML en el codigo de nuestra página, se intepreta texto y etiquetas
h1.innerHTML = 'Patote ';


// .innerText se usa para reemplazar codigo HTML en el codigo de nuestra página, se intepreta solo texto
p.innerText = 'Jelouuuu <h1> </h1>'


// Se usa .getAttribute para obtener el valor de un atributo dentro de la etiqueta en el código HTML
console.log(h1.getAttribute('class'))

// Se usa .setAttribute para asignarle un valor a un atributo en la etiqueta del código HTML, el primer paámetro es para determinar el atributo a modificar y el segundo para dar el valor a asignar
h1.setAttribute('class', 'encabezado')


// Se usa .classList.add para añadir una clase al atributo class de los elementos en el código HTML
h1.classList.add('rojo')
h1.classList.add('verde')


// Se usa .classList.remove para quitar una clase al atributo class de los elementos en el código HTML
h1.classList.remove('rojo')

input.value = '456'


// Se usa document.createElement('') para creaer un elemetno en el código HTML, el parámetro es el nombre de la etiqueta que queremos crear
console.log(document.createElement('span'))


const img = document.createElement('img');
img.setAttribute('src', 'https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/static/og-image.png')

console.log(img);


// Se usa .append para añadir código de otras variables sin borrar el contenido anterior que había en la etiqueta previamente
pid.append(img)

