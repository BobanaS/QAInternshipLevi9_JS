//19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  
let number=50;
let number1= 100;
let number3=38;
let number4=401;
let number5=20;
let number6=400;


function proverabroja(a){
    if((Math.abs(100 - a) <= 20) ||(Math.abs(400 - a) <= 20)){
        console.log(true);
    }else{
       console.log(false);
    }
}
proverabroja(number);
proverabroja(number1);
proverabroja(number3);
proverabroja(number4);
proverabroja(number5);
proverabroja(number6);

