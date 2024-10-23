//15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.  
let mynumber=15;
let mynumber1=10;
let mynumber2=13;
let a=13;
function oduzmi(number){
if(number>=13){
    console.log(number-13);
}else{
    return console.log(Math.abs(number-13));
}
}

oduzmi(mynumber);
oduzmi(mynumber1);
oduzmi(mynumber2);
