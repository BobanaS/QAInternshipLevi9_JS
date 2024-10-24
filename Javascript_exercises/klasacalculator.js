class Calculator {
    constructor() {
        this.result = 0;
    }

    sabiranje(a, b) {
        this.result = a + b;
        return this.result;
    }

    oduzimanje(a, b) {
        this.result = a - b;
        return this.result;
    }

    mnozenje(a, b) {
        this.result = a * b;
        return this.result;
    }

    deljenje(a, b) {
        if (b !== 0) {
            this.result = a / b;
            return this.result;
        } else {
            throw new Error("Deljenje sa nulom nije dozvoljeno!");
        }
    }

    clear() {
        this.result = 0;
    }
}

class AdvancedCalculator extends Calculator {
    stepenovanje(a, b) {
        this.result = Math.pow(a, b);
        return this.result;
    }

    koren(a) {
        this.result = Math.sqrt(a);
        return this.result;
    }

    ostatak(a, b) {
        this.result = a % b;
        return this.result;
    }
}

const calc = new Calculator();
console.log(calc.sabiranje(5, 3));
console.log(calc.mnozenje(5, 3));
console.log(calc.deljenje(9, 3));
console.log(calc.oduzimanje(6, 10));
const advCalc = new AdvancedCalculator();
console.log(advCalc.stepenovanje(2, 4));
console.log(advCalc.koren(16));
console.log(advCalc.ostatak(8,4));
console.log(advCalc.ostatak(8,5));
