//22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  
let s="Bobana";
let s1="Milena";
let s2="Sara";
function removec(a,b){
    let s3="";
    for(let i=0; i<a.length;i++){
if(i!==b){
    s3+=a[i];
}
}
return s3;
}
console.log(removec(s,5));
console.log(removec(s1,4));
console.log(removec(s2,2));