
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
function izvrsiOperaciju(operation) {
     const number1 = parseFloat(document.getElementById('number1').value);
     const number2 = parseFloat(document.getElementById('number2').value);
     let result;


switch (operation) {
     case 'sabiranje':
          result = sabiranje(number1, number2);
          document.getElementById('result').innerText = 'Rezultat je: ' + result;
          break;
     case 'oduzimanje':
          result = oduzimanje(number1, number2);
          document.getElementById('result').innerText = 'Rezultat je: ' + result;
          break;
     case 'mnozenje':
          result = mnozenje(number1, number2);
          document.getElementById('result').innerText = 'Rezultat je: ' + result;
                  break;
     case 'deljenje':
          result = deljenje(number1, number2);
          document.getElementById('result').innerText = 'Rezultat je: ' + result;
          break;
     default:
          result = 'Nepoznata operacija!';
}
}