const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')
const form = document.querySelector('#form')

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues (event) {
//     console.log({event});
//     event.preventDefault();
//     const sumaInputs = Number(input1.value) + Number(input2.value);
//     pResult.innerText = "Tu resultado es: " + String(sumaInputs);
// }


btn.addEventListener('click', sumarInputValues);

function sumarInputValues (event) {
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Tu resultado es: " + String(sumaInputs);
}