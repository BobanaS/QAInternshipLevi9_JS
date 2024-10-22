var result;
const prompt = require('prompt-sync')({ sigint: true });

function sabiranje(number1, number2) {

     return number1 + number2;
}

function oduzimanje(number1, number2) {
     return number1 - number2;
}

function mnozenje(number1, number2) {
     return number1 * number2;
}

function deljenje(number1, number2) {
     if (number2 === 0) {
          return 'Greška: Deljenje nulom nije dozvoljeno!';
     }
     return number1/number2;
}

const number1 = parseInt((prompt('Unesite prvi broj: ')));
const number2 = parseInt((prompt('Unesite drugi broj: ')));
const operation = prompt('Izaberite operaciju (sabiranje, oduzimanje, mnozenje, deljenje): ').toLowerCase();


switch (operation) {
     case 'sabiranje':
          result = sabiranje(number1, number2);
          break;
     case 'oduzimanje':
          result = oduzimanje(number1, number2);
          break;
     case 'mnozenje':
          result = mnozenje(number1, number2);
          break;
     case 'deljenje':
          result = deljenje(number1, number2);
          break;
     default:
          result = 'Nepoznata operacija!';
}

console.log('Rezultat je ' + result);