// Get user input via prompt
const userInput = prompt("Rock\nPaper\nScissors\nShoot =>").toLowerCase().trim()
// console.log(userInput);
// Generate random number
const randomNumber = Math.floor(Math.random() * 3);
// console.log(randomNumber)
// 0 - rock
// 1 - paper
// 2 - scissors
// Appropriate messages
if(randomNumber === 0) {
    console.log("Rock");
    if(userInput === "rock") {
        console.log("It is a draw. :|")
    }
    if(userInput === "paper") {
        console.log("You've won! :)");
    }if (userInput === "scissors") {
        console.log("You lost! :(")
    }
} else if (randomNumber === 1) {
    console.log("Paper")
    if(userInput === "rock") {
        console.log("You lost! :(")
    }
    if(userInput === "paper") {
        console.log("It is a draw. :|")
    }if (userInput === "scissors") {
        console.log("You've won! :)");
    }
} else {
    console.log("Scissors")
    if(userInput === "rock") {
        console.log("You've won! :)");
    }
    if(userInput === "paper") {
        console.log("You lost! :(")
    }if (userInput === "scissors") {
        console.log("It is a draw. :|")
    }
}
