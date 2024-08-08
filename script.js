// Variables
let userChoice = prompt("Enter your Choice..!");
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let result;


// Computer Choice 

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
console.log("Bot Choice :" + " " + getComputerChoice());


// User Choice

function getHumanChoice() {
    userChoice = userChoice.toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    } else {
        return ("Invalid Choice! Enter 'rock','paper' or 'scissors'.")
    }
}
console.log("Your Choice : " + ' ' + getHumanChoice());

// Single Round

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        result = "Its's a Tie.";
    } else {
        switch (humanChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You Win! Rock Beats Scissors" : "You Lose, Bot Get the Point";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win! Paper Beats Rock" : "You Lose, Bot Get the Point";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win! Scissors Beats Paper" : "You Lose, Bot Get the Point";
                break;
            default:
                result = "Invalid Choice";
        }
    }
    console.log(result);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);