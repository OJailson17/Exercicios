// Problema:

/* Ao receber uma string como parâmetro, verifique quantas palavras existem na string de acordo com o estilo de concatenação "camelCase. Uma nova palavra se inicia a partir de uma
letra maiúscula"
Ex:

Input: "bomDia
Output: 2

Input: "sejaBemVindo"
Output: 3

*/

// solução

const camelCase = str => str.split(/[A-Z]/).length;

console.log(camelCase('sejaBemVindo')) //3
