//18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  
let number=50;
let number1= 12;
let number3=38;
let number4=17;

function provera(a,b){
    if(a===50 || b ===50 || b+a===50){
        console.log(true);
    }else{
       console.log(false);
    }
}
provera(number, number1);
provera(number1, number3);
provera(number4,number4);