// Escreva um programa que recebe um array como parâmetro e verifica se todos os números desse array são inteiros ou não.

function inteiro(arr){
    let result = arr.map(num => {
        if(Number.isInteger(num)){
            return true
        }else{
            return false
        }
        })

        let resultado = result.indexOf(false);

        if( resultado === -1){
            return 'Todos os números são inteiros'
        }else{
            return 'Nem todos os números são inteiros'
        }
}

console.log(inteiro([2,3,4,3]));