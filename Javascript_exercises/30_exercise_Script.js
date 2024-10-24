/*
30. Write a JavaScript program to check whether a string " Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.  
*/

function findScript(a) {
    if (a.length < 10) {
        return (a)
    }
    if (a.substring(4, 10) === "Script") {
        return a.slice(0, 4) + a.slice(10);
    }
    return a;
}
console.log(findScript("JavaScript"));
console.log(findScript("JavaaScript"));
console.log(findScript("JavaScript is fun"));
console.log(findScript("Hello World")); 