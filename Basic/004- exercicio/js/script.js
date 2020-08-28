// Escreva um programa que receba o tamanho dos lados de um triangulo e mostre qual é o seu tipo

// Variável global
var result = document.querySelector('.resultado')
// Evento de click
let btn = document.querySelector('.btn').addEventListener('click', function(){

    // Variáveis que recebem os valores dos inputs
    let sideOne = Number(document.getElementById('side1').value);
    let sideTwo = Number(document.getElementById('side2').value);
    let sideThree = Number(document.getElementById('side3').value);

    if(sideOne === sideTwo && sideOne === sideThree){
        result.innerHTML = '<img src="./img/equilatero.svg" alt="triângulo equilátero"> <p>Triângulo Equilátero</p>'
    }else if(sideOne === sideTwo || sideTwo === sideThree){
        result.innerHTML = '<img src="./img/isosceles.png" alt="triangulo isósceles"> <p>Triângulo Isósceles</p>'
    }else{
        result.innerHTML = '<img src="./img/escaleno.png" alt="triangulo escaleno"> <p>Triângulo Escaleno</p>'
    }


});