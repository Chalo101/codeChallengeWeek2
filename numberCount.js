
//Prompting the user to put in the first and the last number
const prompt = require("prompt-sync")({ sigint: true });
let firstNo = parseInt(prompt("Enter the first number:"));
let lastNo = parseInt(prompt("Enter the last number:"));


//Creating the function 

function generateArray(firstNo, lastNo) {
    let result = [];
    
    // Checking if the first number is less than or equal to the last number
    if (firstNo <= lastNo) {
        for (let i = firstNo; i <= lastNo; i++) {
            result.push(i);
        }
    }
    // Check if start is greater than end
    else {
        for (let i = firstNo; i >= lastNo; i--) {
            result.push(i);
        }
    }
    
    return result;
}


let generatedArray = generateArray(firstNo, lastNo);
console.log(generatedArray);
