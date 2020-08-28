/* Write a JavaScript program to get the current date.  Go to the editor
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

// Variável global
var result = document.querySelector('.result');

// Links dos botões e Eventos
let completeDate = document.querySelector('#completeDate').addEventListener('click', showData);
let day = document.querySelector('#day').addEventListener('click', showDay);
let month = document.querySelector('#month').addEventListener('click', showMonth);
let year = document.querySelector('#year').addEventListener('click', showYear);

// Variáveis para pegar as datas
var data = new Date();

var takeDay = data.getDay();
var takeMonth = data.getMonth();
var takeYear = data.getFullYear();

// Funções que imprimem a data de acordo com o formato selecionado
 function showData() {
     result.innerHTML = `${takeDay}/${takeMonth}/${takeYear}`;
}
function showDay(){
    result.innerHTML = `${takeDay}`
}
function showMonth(){
    result.innerHTML = `${takeMonth}`;
}
function showYear(){
    result.innerHTML = `${takeYear}`;
}