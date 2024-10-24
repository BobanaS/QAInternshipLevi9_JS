/*
26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.  
*/

let s = "Bobana";
let s1 = "Milena";
let s2 = "Sara";
let s4="";
function changec(a) {
    if (a.length >= 3) {
        let s3 = a.slice(-3);
       console.log(s3+a+s3);
    } else {
        console.log("Greska mora biti duzi string.");
    }
}
changec(s, "b");
changec(s1, "a");
changec(s2, "b");
changec(s4,"c");