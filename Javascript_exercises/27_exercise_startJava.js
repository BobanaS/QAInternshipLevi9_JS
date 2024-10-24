/*
27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  
*/
let s="Jav";
let s1="Javaje";
let s2="JJJava";
let s4="Javascript";
let s5="Java je ";
function checkstring(a){
    if(a.length>=4){
    if(a.startsWith("Java")){
        console.log(true);
    }else{
        console.log(false);
    }
}else{
 console.log("String mora imati minimum 4 karaktera.");   
}
}
checkstring(s);
checkstring(s1);
checkstring(s2);
checkstring(s4);
checkstring(s5);
