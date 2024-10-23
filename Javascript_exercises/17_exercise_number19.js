//17. Write a JavaScript program to compute the absolute difference between a specified number and 19.
// Returns triple the absolute difference if the specified number is greater than 19.  
let mynumber=21;
let mynumber1=10;
let mynumber2=19;
let a=13;
function oduzmi(number){
if(number<=19){
    console.log(Math.abs(number-19));
}else{
    return console.log(Math.abs(number-19)*3);
}
}

oduzmi(mynumber);
oduzmi(mynumber1);
oduzmi(mynumber2);