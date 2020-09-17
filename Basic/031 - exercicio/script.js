// Escreva um programa que receba um array e retorne apenas os números pares desse array

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

let pares = (arr) => arr.filter(valor => valor%2 === 0);

console.log(pares(nums));