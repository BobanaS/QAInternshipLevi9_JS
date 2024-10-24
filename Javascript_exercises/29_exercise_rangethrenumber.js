/*
29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.  
*/
function checkint(a,b,c){
    if((a>=50 && a<=99)||(b>=50 && b<=99)||(c>=50 && c<=99)){
        console.log(true);
}else{
 console.log(false);   
}
}
checkint(50,99,79);
checkint(99,50,80);
checkint(100,49,111);
checkint(11,76,11);
checkint(60,120,23);
checkint(1,1,50);

