// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

function sum(){
    let num1 = Number(prompt('Digite o primeiro número:'));
    let num2 = Number(prompt('Digite o segundo número:'));
    let result = num1 + num2;

    if(num1 === num2){
        alert(result * 3);
    }else{
        alert(result);
    }
};

sum();