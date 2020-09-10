// Escreva um programa que dado um array de números e calcula cada elemnto do array vezes a quantidade de elementos.

function arrayElementos(arr){
    let result = arr.map(element => element * arr.length);
    return result;
}

//console.log(arrayElementos([2,4,6,8,0]));

//Output
//[10, 20, 30, 40, 0];


