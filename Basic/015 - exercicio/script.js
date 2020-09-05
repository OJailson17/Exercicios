// Programa que recebe a quantidade de vitórias, derrotas e empates de um time e retorna o seu total de pontos.

// Variáveis globais
const wins = 3;
const draw = 1;
const lost = 0;

// Função  que recebe os valores dos inputs
function takeData(){
    let wins = Number(prompt('Digite o número de vitórias do seu time:'));
    let draw = Number(prompt('Digite o número de empates do seu time:'));
    let lost = Number(prompt('Digite o número de derrotas do seu time:'));

    alert(calculate(wins, draw, lost));
}

// Função que calula e retorna o total de pontos
function calculate(num1, num2, num3){
    num1 *= wins;
    num2 *= draw;
    num3 *= lost;

    return `Seu time tem um total de ${num1 + num2 + num3} pontos`;
}

takeData();