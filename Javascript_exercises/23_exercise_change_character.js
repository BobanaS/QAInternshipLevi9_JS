/*
 Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.  
*/

let s = "Bobana";
let s1 = "Milena";
let s2 = "Sara";
let s4="";
function changec(a, b) {
    let s3 = "";
    if (a.length >= 1) {
        for (let i = 0; i < a.length; i++) {
            if (i === 0 || i === a.length - 1) {
                s3 += b;
            }
            else {
                s3 += a[i];
            }
        }
    } else {
        console.log("Greska mora biti duzi string.");
    }
    return s3;
}
console.log(changec(s, "b"));
console.log(changec(s1, "a"));
console.log(changec(s2, "b"));
console.log(changec(s4,"c"));