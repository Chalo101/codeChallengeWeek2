//Prompting the user to input the numbers
const prompt = require("prompt-sync")({ sigint: true });
function promptForArray() {
    let input = prompt("Enter numbers separated by commas:").trim();
    let array = input.split(",").map(num => parseInt(num.trim()));
    return array.filter(num => !isNaN(num)); // Remove NaN values
}

//Identifies prime numbers in the array
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function filterPrimes(inputArray) {
    return inputArray.filter(num => isPrime(num));
}

//Displays the return value to the user

const input = promptForArray();
const primes = filterPrimes(input);
console.log("Prime numbers:", primes);