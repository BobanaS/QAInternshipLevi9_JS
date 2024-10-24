/*
24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  
*/
let s = "Bobana";
let s1 = "Milena";
let s2 = "Sara";
function changec(a, b) {
    let s3 = "";
        for (let i = 0; i < a.length; i++) {
            if (i === 0 || i === a.length - 1) {
                s3 += b[0];
            }
            else {
                s3 += a[i];
            }
        }    
    return s3;
}
console.log(changec(s, s1));
console.log(changec(s1, s));
console.log(changec(s2, s1));