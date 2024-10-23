/*
6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  
*/
var year;
function parna(year) {
    if (year % 4 === 0 && year % 100 != 0) {
        console.log(year + ". godina je parna");
    } else if (year % 4 === 0 && year % 400 === 0) {
        console.log(year + ". godina je parna");
    }
    else {
        console.log(year + ". godina je neparna.");

    }
}
parna(2000);
parna(1900);
parna(2024);
parna(2023);
