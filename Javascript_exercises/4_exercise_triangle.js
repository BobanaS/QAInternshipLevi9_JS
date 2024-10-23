/*
4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
*/
var a=5;
var b=5;
var c=5;
var s=(a+b+c)/2;
var result=Number(Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2));
console.log(result);