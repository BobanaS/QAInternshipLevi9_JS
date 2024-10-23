/*9. Write a JavaScript program to calculate the days left before Christmas.  
*/
var today = new Date();
var year= today.getFullYear();
var day_Christmas=new Date(year, 0, 7);
if (today > day_Christmas) {
    day_Christmas.setFullYear(year + 1);
}

var countdays=day_Christmas-today;
var daysleft=Math.ceil(countdays/(1000 * 60 * 60 * 24));

console.log("Ostalo je jos " + daysleft + " dana do Bozica.");