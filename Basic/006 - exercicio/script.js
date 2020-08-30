/*
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
 */

//  Events
let btnC = document.querySelector('.btnC').addEventListener('click', CtoF);
let btnF = document.querySelector('.btnF').addEventListener('click', FtoC);

// Função que recebe o valor em Celsius e converte em Fahrenheit
function CtoF(C){
    C = Number(prompt('Digite o valor em graus Celsius:'));
    let result = C * (9/5) + 32;

    alert(`${C}ºC é é igual a ${result}ºF`);
}
// Função que recebe o valor em Fahrenheit e converte em Celsius
function FtoC(F){
    F = Number(prompt('Digite o valor em graus Fahrenheit:'));
    let result = (F - 32) * (5/9);

    alert(`${F}ºF é igual a ${result}ºC`);
}