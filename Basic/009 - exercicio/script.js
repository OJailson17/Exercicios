// Write a JavaScript program to get the difference between a given number and 13,
// if the number is greater than 13 return double the absolute difference.

function diference(num){
    let result = Math.abs(num - 13);

    if(num > 13){
        return result * 2;
    }else{
        return result;
    }
}
console.log(diference(16));
//Output

//5 --> 8
//10 --> 3
//14 --> 2
//16 --> 6