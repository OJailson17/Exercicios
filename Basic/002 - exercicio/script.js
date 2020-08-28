// rite a JavaScript program to print the contents of the current window

let btn = document.querySelector('.btn').addEventListener('click', printPage);

function printPage(){
    window.print();
}