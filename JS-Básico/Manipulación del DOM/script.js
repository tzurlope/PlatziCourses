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
})