/* 
    Faça um Programa que peça o valor da gasolina e do álcool de um posto e diga qual é o combustível mais vantajoso abastecer, 
    sabendo que somente é vantagem abastecer álcool se o preço do mesmo é menor ou igual a 70% do valor da gasolina.  
    (Bônus de dois pontos para o sorteado  ou voluntário que resolver).

 */

 function takeData(){
     let gasolina = Number(prompt('Digite o preço da gasolina:'));
     let alcool = Number(prompt('Digite o preço do alcool'));
     let porcentagem = (alcool * gasolina) / 100;

     if(porcentagem <= 70){
         console.log(`O álcool é melhor`);
     }else{
         console.log(`A gasolina é melhor `);
     }
 }

 takeData()