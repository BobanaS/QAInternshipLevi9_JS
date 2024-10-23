//16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  
let number=11;
let number1= 12;
let number3=10;
function sum(a,b){
    if(a===b){
        let c=(a+b)*3;
        console.log(parseInt(c));
    }else{
        let c=a+b;
        console.log(parseInt(c));
    }
}
sum(number, number1);
sum(number3, number3);