/*28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.  
*/
function checkint(a,b){
    if((a>=50 && a<=99)||(b>=50 && b<=99)){
        console.log(true);
}else{
 console.log(false);   
}
}
checkint(50,99);
checkint(99,50);
checkint(100,49);
checkint(11,76);
checkint(60,120);



