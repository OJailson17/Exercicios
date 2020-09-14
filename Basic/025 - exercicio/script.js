/*  Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. 
    <60 == F
    <70 == D
    <80 == C
    <90 == B
    <100 == A

    Vinoth
    Divya
    Ishitha
    Thomas

*/

const names = ['Davi', 'Vinoth', 'Divya', 'Ishitha', 'Thomas'];

function takeData(){
    for(let i = 0; i < names.length; i++){
        var data = Number(prompt(`Digite a nota de ${names[i]}`));
        console.log(`A nota de ${names[i]} foi: ${verificaData(data)}`);
    };
}

function verificaData(data){
    if(data <= 60){
        return 'F';
    }else if(data <= 70 && data > 60){
        return 'D'
    }else if(data <= 80 && data > 70){
        return 'C';
    }else if(data <= 90 && data > 80){
        return 'B';
    }else if(data === 0){
        return 'Por favor, digite uma nota';
    }else{
        return 'A';
    }
}

takeData();