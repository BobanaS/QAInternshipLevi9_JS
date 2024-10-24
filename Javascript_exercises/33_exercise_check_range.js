/*
33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.  
*/
function checkrange(a,b){
    if(((a>=40 && a<=60)&&(b>=40 && b<=60)) || ((a>=70 && a<=100)&&(b>=70 && b<=100))){
        console.log(true);
}else{
 console.log(false);   
}
}
checkrange(50,99);
checkrange(70,100);
checkrange(40,60);
checkrange(11,76);
checkrange(60,120);