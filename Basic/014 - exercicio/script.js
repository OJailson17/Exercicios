// Crie uma senha padrão e verifique se a senha digitada pelo usuário é igual. Caso seja mostre "ACESSO PERMITIDO", caso não, 'ACESSO NEGADO'.
// Evento
let btn = document.querySelector('.btn').addEventListener('click', clicar);

// Funções
function clicar(){
    let user = document.getElementById('user').value;
    let pass = Number(document.getElementById('pass').value);

    if(pass === 1234){
        alert('ACESSO PERMITIDO!');
    }else{
        alert('ACESSO NEGADO!');
    }
}