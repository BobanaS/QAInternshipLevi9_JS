//20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.  

let number=23;
let number1= -5;
let number2=-4;
let number3=0;

function provera(a,b){
    if((a>0 && b>0)||(a<0 &&b<0)){
        console.log(false);
    }else{
       console.log(true);
    }
}
provera(number, number1);
provera(number1, number2);
provera(number,number);
provera(number2,number2);