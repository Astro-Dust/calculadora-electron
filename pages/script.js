const calculadoraForm = document.getElementById('calculadoraForm');
const inputNumber = document.getElementById('inputNumber');
const btnSubmit = document.getElementById('btnSubmit');
const resultado = document.getElementById('resultado');

function multiplicaPor2() {

    let multiplicacao = inputNumber.value * 2;
    resultado.innerText = 'Resultado: ' + multiplicacao;

}


calculadoraForm.addEventListener('submit', (event) => {
    event.preventDefault();
})
btnSubmit.addEventListener('click', multiplicaPor2);