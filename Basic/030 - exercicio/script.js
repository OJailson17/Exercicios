// Operador rest/spread;

const CLIENTE = {
    nome: 'Marcos Vinicius de Alves',
    cpf: '123.456.789-10',
    nascimento: '11/11/1999',
    tel: '75988392678',
    endereço: {
        rua: 'Tancredo Neves',
        bairro: 'Santa Luzia',
        numero: 90,
        estado: 'Bahia',
        país: 'Brasil'
    }
}

let {nome, ...rest} = CLIENTE;
console.log(rest);



// Função que recebe array como parâmetro e retorna o a multiplicação do primeiro elemento do array pelos outros elementos
let valor = [6,5, 4, 4, 6, 8 ,3, 0, 9];
let soma = ([first, ...rest]) => rest.map(v => v * first);
console.log(soma(valor));

//Concatenação de dois arrays
let arr = [6,5, 4, 4, 6, 8 ,3, 0, 9];
let arr1 = [3,5,9,5,3,2,1,6,4,9,7,6,0];

console.log([...arr, ...arr1]);

