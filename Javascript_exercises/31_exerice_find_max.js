/*
31. Write a JavaScript program to find the largest of three given integers.  
*/
function checkMax(a,b,c){
   
if(a>=b&& a>=c){
        console.log(a + " je najveci broj.");    
} else if(b>=c){
    console.log(b + " je najveci broj.");    
}else{
    console.log(c + " je najveci broj.");    
}
}

checkMax(50,99,79);
checkMax(99,50,80);
checkMax(100,49,111);
checkMax(111,49,111);
