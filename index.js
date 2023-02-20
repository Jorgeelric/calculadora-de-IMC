const btn = document.querySelector('#btn');

function calculaIMC(){
    const altura = document.querySelector('.altura__number').value;
    const peso = document.querySelector('.peso__number').value;
    const imc = peso / (altura * altura)
    return imc.toFixed(2);
}

btn.addEventListener('click', () => {
    const imc = calculaIMC();
    alert(imc);
})