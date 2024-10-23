/*
8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. 
The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  
*/
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var number1;
// Postavite pitanje korisniku
rl.question('Guess the number between 1 and 10 inclusive ', (input) => {
     number1 = parseFloat(input);
    var number = Math.round(Math.random());
    console.log(number);
    if (number1 == number) {
        console.log('Matched');
    } else { 
    console.log('Not matched, the number was ' + number);
}
rl.close();
})