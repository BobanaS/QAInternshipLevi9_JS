/*
32. Write a JavaScript program to find the closest value to 100 from two numerical values.  
*/


function checkint(a,b){
    if((100-a)<(100-b)){
        console.log("Prvi broj je " +  a + " i blizi je broju 100 od broja " + b);
}else if((100-b),(100-a)){
    console.log("Drugi broj je " +  b + " i blizi je broju 100 od broja " + a);
}else{
    console.log("Ova dva broja: " + a +" i " + b + " su jednaka");
}
}
checkint(50,99);
checkint(80,50);
checkint(11,76);
checkint(60,120);
