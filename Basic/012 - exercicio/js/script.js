/* O objetivo do exercicio é escrever um programa que calcula a média de duas notas, porém a uma terceira nota optativa na qual é necessário
verificar se ela foi preenchida ao não. Caso tenha sido, a nota opcional deve substituir a menor nota */


// Variável global
var result = document.querySelector('.result');

// Evento
let btn = document.querySelector(".btn").addEventListener("click", checaNotas);

// função que é chamada no evento e faz a checagem e o recebimento das notas
function checaNotas() {
  // variáveis que recebem os valores dos inputs
  let nota1 = Number(document.getElementById("nota1").value);
  let nota2 = Number(document.getElementById("nota2").value);
  let nota3 = Number(document.getElementById("nota3").value);

  //   Verifica se a nota opcional está vazia
  if (nota3 === 0) {
    result.innerHTML = "<p>-1</p>"
    result.innerHTML = checaMedia(nota1, nota2);
  } else {
    maiorNota(nota1, nota2, nota3);
  }
}

// Função que calcula a média
function checaMedia(num1, num2) {
  let media = (num1 + num2) / 2;

  if (media >= 6) {
    return `PARABÉNS! Você foi aprovado! Sua média foi ${media}`;
  } else if (media < 6 && media >= 3) {
    return `Você terá que fazer o exame. Sua média foi ${media}`;
  } else {
    return `Você foi REPROVADO! Estude mais... Sua média foi ${media}`;
  }
}

// Função que verifica qual a maior nota e retorna a media delas
function maiorNota(num1, num2, numOp) {
  if (numOp > num1) {
    result.innerHTML = checaMedia(numOp, num2);
  } else if (numOp > num2) {
    result.innerHTML = checaMedia(num1, numOp);
  } else if (numOp <= num1 && numOp <= num2) {
    result.innerHTML = checaMedia(num1, num2);
  } else if (num1 === num2 && num1 === numOp) {
    result.innerHTML = checaMedia(num1, num2);
  } else {
    result.innerHTML = "ERROR";
  }
}
