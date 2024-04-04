const prompt = require("prompt-sync")({ sigint: true });
const input = prompt("Please input any word or letter ");

function changeCase(input){
    let character = input.split("")

    let swapCharacter = character.map(
        (a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase())
    )

swapCharacter = swapCharacter.join("");
console.log (swapCharacter)
}

changeCase(input)
