// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise. 

function checkString(str){
    if(str.lastIndexOf('Java', 3) != -1){
        return true;
    }else{
        return false;
    }
}

console.log(checkString('Java is diferent of JavaScript'));