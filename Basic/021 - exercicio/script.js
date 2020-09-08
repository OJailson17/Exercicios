// Escreva um programa que selecione todo o texto digitado pelo usuário numa caixa de texto e copie ele para o clipboard

// Evento
let btn = document.querySelector('.btn').addEventListener('click', copiar);

function copiar(){
    let txt = document.getElementById('txt-area');

    txt.select();
    document.execCommand('copy');
}