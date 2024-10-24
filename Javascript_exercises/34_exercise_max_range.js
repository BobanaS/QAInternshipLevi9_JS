/*
34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.  
*/
function checkrangeAndMax(a,b){
    if(((a>=40 && a<=60)&&(b>=40 && b<=60))){
    checkMax2(a,b);
    }else{
 console.log(false);   
}
}

function checkMax2(a,b){
   
    if(a>b){
            console.log(a + " je veci broj od " + b +".");    
    } else if(b>a){
        console.log(b + " je veci broj od " + a +".");    
        }else{
            console.log("Ova dva broja su jednaka.");    
            }
    }
checkrangeAndMax(50,99);
checkrangeAndMax(40,60);
checkrangeAndMax(60,40);
checkrangeAndMax(11,13);
checkrangeAndMax(55,55);