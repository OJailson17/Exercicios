// Write a JavaScript program to calculate multiplication and division of two numbers (input from user)

// variavel global
var result = document.querySelector('.result');

// Events
let btnMult = document.getElementById('btnMultiply').addEventListener('click', multiplicar);
let btnDiv = document.getElementById('btnDivide').addEventListener('click', dividir);

// funções 
function multiplicar(){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    let mult = num1 * num2;

    result.innerHTML = `o resultado é: ${mult}`
}
function dividir(){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    let split = num1 / num2;

    result.innerHTML = `o resultado é: ${split}`;
}
