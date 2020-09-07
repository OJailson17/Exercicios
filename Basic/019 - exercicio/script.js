/* 
Escreva um programa que percorre um objeto e retorna os seguintes valores: quantidade de livros, lista de autores em ordem alfabética,
anos de lançamento em ordem alfabética.
*/

const books = [
    {
        título: 'Bisa Bia, Bisa Bel',
        ano: 1981,
        autor: 'Ana Maria Machado'
    },
    {
        título: 'Uma Ideia Toda Azul',
        ano: 1979,
        autor: 'Marina Colasanti'
    },
    {
        título: 'O Menino Maluquinho',
        ano: 1980,
        autor: 'Ziraldo'
    },
    {
        título: 'A Mulher que Matou os Peixes',
        ano: 1968,
        autor: 'Clarice Lispector'
    },
    {
        título: 'Chapeuzinho Amarelo',
        ano: 1970,
        autor: 'Chico Buarque'
    },
    {
        título: 'Ou Isto Ou Aquilo',
        ano: 1964,
        autor: 'Cecília Meireles'
    },
    {
        título: 'Papo de Sapato',
        ano: 2005,
        autor: 'Pedro Bandeira'
    },
    {
        título: 'Marcelo, Marmelo, Martelo',
        ano: 1976,
        autor: 'Ruth Rocha'
    },
    {
        título: 'O Meu Pé de Laranja Lima',
        ano: 1968,
        autor: 'José Mauro de Vasconcelos'
    },
    {
        título: 'Reinações de Narizinho',
        ano: 1931,
        autor: 'Monteiro Lobato'
    },
    {
        título: 'A Arca de Noé',
        ano: 1970,
        autor: 'Vinícius de Moraes'
    }
];

// Função que chama as outras funções
function funções(){
    console.log(qtdBooks(books));
    console.log(authors(books));
    console.log(years(books));
}

//função que retorna a quantidade de elementos do objeto
function qtdBooks(arr){
    return `O objeto possui um total de ${arr.length} livros`;
}

// Função que retorna a lista de autores em ordem alfabética
function authors(str){
    let autores = str.map(names => names.autor)

    return autores.sort();
}
// Função que retorna os anos de lançamentos em ordem alfabética
function years(num){
    let anos = num.map(year => year.ano);

    return anos.sort();
}

funções();