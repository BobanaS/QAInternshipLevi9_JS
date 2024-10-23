/*. Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

var today = new Date();
var date=today.getDate();
var month=today.getMonth()+1;
var year=today.getFullYear();

if(date<0){
    date="0"+date;
}
if(month<0){
    month="0"+month;
}
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
console.log(month+"-"+date+"-"+year);
console.log(month+"/"+date+"/"+year);
console.log(date+"-"+month+"-"+year);
console.log(date+"/"+month+"/"+year);
