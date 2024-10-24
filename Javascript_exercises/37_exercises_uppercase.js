/*
37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.  
*/
let s="Jv";
let s1="Javaje";
let s2="JJJAVA";
let s4="Javascript";
let s5="Java je ";
function upperchar(a){
if(a.length<3){
    console.log(a.toUpperCase());
} else{
let b="";
for(let i=0;i<a.length;i++){
    if(i<3){
     b+=a[i].toLowerCase();
    } else{ 
    b+=a[i];
}
}
 console.log(b);
}
}
upperchar(s);
upperchar(s1);
upperchar(s2);
upperchar(s4);
upperchar(s5);