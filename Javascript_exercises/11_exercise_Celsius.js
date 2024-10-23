/*Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C*/

var c=60;
var f=45;
var c1=5*(f-32)/9;
var f2=32+(c*9/5);
console.log(c+"°C iznosi "+f2+"°F");
console.log(f+"°F iznosi "+c1+"°C");
