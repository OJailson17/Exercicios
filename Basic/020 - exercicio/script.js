// Escreva um programa que receba um número binário e retorne esse numéro em decimal

//10010101011
//Cálculo => binário * 2^posição do binário

function bin2Dec(){
    let bin = prompt('Digite um número:')
    let decimal = 0;

    for(let i = bin.length-1; i >= 0; i--){
        decimal += parseInt(bin[i]) * Math.pow(2, bin.length-1 -i);
    }
    return decimal;
}

console.log(bin2Dec());