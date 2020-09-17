// Escreva uma programa que verifica se o bartender pode vender a bebida ou não;
// As bebidas só podem ser vendidas para maiores de 18 anos.

let verificaIdade = () => {
    let age = Number(prompt('Digite a sua idade:'));
    return age >= 18 ? 'Venda permitida' : 'Venda negada';
}

alert(verificaIdade());