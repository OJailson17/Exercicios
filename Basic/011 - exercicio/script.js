//Escreva um  programa que dado uma sentença, retorne o numero de palavras contidas nessa sentença.

function sentence(str){
    let numWord = str.split(' ');
    return numWord.length;
}

console.log(sentence('hello world!, olá mundo'));

//output
//4
