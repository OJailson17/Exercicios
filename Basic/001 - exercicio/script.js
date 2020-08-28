document.onload = setInterval(function(){
    returnData()
},1000);
/* Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

function returnData(){
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let data = new Date();
    let day = data.getDay();
    let min = data.getMinutes();
    let hour = data.getHours();
    let sec = data.getSeconds();

    
    switch(day){
        case 0:
            console.log(`today is: ${week[0]}.\nCurrent time: ${hour} : ${min} : ${sec}`);
            break;
        case 1:
            console.log(`today is: ${week[1]}.\nCurrent time: ${hour} : ${min} : ${sec}`);
            break;
        case 2:
            console.log(`today is: ${week[2]}.\nCurrent time: ${hour} : ${min} : ${sec}`);
            break;
        case 3:
            console.log(`today is: ${week[3]}.\nCurrent time: ${hour} : ${min} : ${sec}`);
            break;
        case 4:
            console.log(`today is: ${week[4]}.\nCurrent time: ${hour} : ${min} : ${sec}`);
            break;
        case 5:
            console.log(`today is: ${week[5]}.\nCurrent time: ${hour} : ${min} : ${sec}`);
            break;
        case 6:
            console.log(`today is: ${week[6]}.\nCurrent time: ${hour} : ${min} : ${sec}`);
            break;
        default:
            console.log('ERROR: Dia inexistente!');    
    }
    
}