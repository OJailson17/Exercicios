// Escreva um programa que recebe um objeto e filtra alguns dados através do filter()

const people = [
    { name: 'Carlos', age: 28 },
    { name: 'Henrique', age: 22 },
    { name: 'João', age: 27 },
    { name: 'Paulo', age: 30},
    { name: 'Jaison', age: 20},
    { name: 'Ricardo', age: 39},
    { name: 'Amanda', age: 23},
    { name: 'Ana', age: 19}
];

function filtrar(obj){
    let result = obj.filter(element => element.age < 22);
    return result;
}

console.log(filtrar(people));


//Função com as funções map e filter;
/*
function mapear(obj){
    let takeNum  = obj.map(element => element.age);
    let result = takeNum.filter(numero => numero < 28);

    return result;
}

console.log(mapear(people));
*/