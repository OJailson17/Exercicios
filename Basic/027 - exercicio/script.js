// Escreva um programa que receba um array contendo números positivos enegativos e retorne no console todos os números do array positivos

const arr = [12, -13, 14, -15, 16];

    arr.forEach(element => {
        if(element < 0){
            console.log(element * -1);
        }else{
            console.log(element);
        }
    })
