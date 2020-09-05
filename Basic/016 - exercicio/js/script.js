// Variável global
let img = document.querySelector('img');
// Eventos
  let btnOn = document.querySelector(".btnOn").addEventListener("click", lightOn);
  let btnOff = document.querySelector(".btnOff").addEventListener("click", lightOff);

//  Funções
function lightOn(){
    img.src='./img/lampada-acesa.jpg';
}
function lightOff(){
    img.src='./img/lampada-apagada.jpg';
}