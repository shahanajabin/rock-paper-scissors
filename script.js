
document.addEventListener("DOMContentLoaded", () => {
    // variables

    let computerChoice;
    let humanScore = 0;
    let computerScore = 0;
    let result = "";

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

    // Game Logic

    function playRound(humanChoice) {

        computerChoice = getComputerChoice();
        if (humanChoice === computerChoice) {
            result = "Its's a Tie.";
        } else {
            switch (humanChoice) {
                case "rock":
                    if (computerChoice === "scissors") {
                        humanScore += 1;
                        result = "You Win! Rock Beats Scissors."
                    } else {
                        computerScore += 1;
                        result = "You Lose! Paper Beats Rock.";
                    }
                    break;
                case "paper":
                    if (computerChoice === "rock") {
                        humanScore += 1;
                        result = "You Win! Paper Beats Rock."
                    } else {
                        computerScore += 1;
                        result = "You Lose! Scissors Beats Paper.";
                    }
                    break;
                case "scissors":
                    if (computerChoice === "paper") {
                        humanScore += 1;
                        result = "You Win! Scissors Beats Paper."
                    } else {
                        computerScore += 1;
                        result = "You Lose! Rock Beats Scissors.";
                    }
                    break;
            }
        }

        document.querySelector('.outcome').textContent = `OutCome :- ${result}`;
        document.getElementById('humanScore').textContent = humanScore;
        document.getElementById('computerScore').textContent = computerScore;

        if (humanScore === 5) {
            document.querySelector('.outcome').textContent = "Congratulation! You Win The Game.";
        } else if (computerScore === 5) {
            document.querySelector('.outcome').textContent = "Better Luck next Time! Bot Win The Game.";
        }
        stop()
    }
    // return result;

    function stop() {
        if (humanScore === 5 || computerScore === 5) {
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissors').disabled = true;
        }
    }

    function reset() {
        humanScore = 0;
        computerScore = 0;
        document.getElementById('humanScore').textContent = humanScore;
        document.getElementById('computerScore').textContent = computerScore;
        document.querySelector('.outcome').textContent = "Choose your move.";

        document.getElementById('rock').disabled = false;
        document.getElementById('paper').disabled = false;
        document.getElementById('scissors').disabled = false;
    }

    //  Changing into DOM 

    document.getElementById('rock').addEventListener('click', () => playRound('rock'));
    document.getElementById('paper').addEventListener('click', () => playRound('paper'));
    document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
    document.querySelector('.reset').addEventListener('click', reset);

});
