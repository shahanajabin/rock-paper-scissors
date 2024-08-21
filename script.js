// variables

let userChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let result;

// User Choice

function getHumanChoice(userChoice) {
    let choice = userChoice.toLowerCase()
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        return ("Invalid Choice! Enter 'rock','paper' or 'scissors'.")
    }
}

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


// // Single Round

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result = "Its's a Tie.";
    } else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice == "scissors") {
                    humanScore += 1;
                    result = "You Win! Paper Beats Rock"
                } else {
                    computerScore += 1;
                    result = "You Lose, Bot Get the Point";
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    humanScore += 1;
                    result = "You Win! Paper Beats Rock"
                } else {
                    computerScore += 1;
                    result = "You Lose, Bot Get the Point";
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    humanScore += 1;
                    result = "You Win! Paper Beats Rock"
                } else {
                    computerScore += 1;
                    result = "You Lose, Bot Get the Point";
                }
                break;
            default:
                result = "Invalid Choice";
        }
    }
    return result;
}

function playGame() {

    for (i = 0; i < 5; i++) {
        let userChoice = prompt("Enter your Choice..!");
        humanSelection = getHumanChoice(userChoice);
        computerSelection = getComputerChoice();
        console.log("Your Choice : " + ' ' + humanSelection);
        console.log("Bot Choice :" + " " + computerSelection);


        result = playRound(humanSelection, computerSelection)
        console.log(result);

        console.log(`Round ${i + 1}: -`);
        console.log(`Your Score ${humanScore} `);
        console.log(`Bot ${computerScore} `);

    }
    if (humanScore > computerScore) {
        console.log("Congratulation! You Win The Game.")
    } else if (humanScore < computerScore) {
        console.log("Better Luck next Time! Bot Win The Game.");
    } else {
        console.log("Wooh! Its a tie.");
    }

}
console.log(playGame());




