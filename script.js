function getComputerChoice() {
    rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return "Rock";
    } else if (rand === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    humanChoice = prompt("Do you choose Rock, Paper, or Scissors? ");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const humanScoreText = document.querySelector(".humanScoreText");
    const computerScoreText = document.querySelector(".computerScoreText");
    const log = document.querySelector("p.log");

    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;

    function playRound(humanChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = getComputerChoice().toLowerCase();

        if (humanChoice === computerChoice) {
            log.textContent = "You Tied.";
        } else if ((humanChoice === "rock" && computerChoice == "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            humanScoreText.textContent++;
            log.textContent = "You Win! " + humanChoice + " beats " + computerChoice + ".";
        } else if ((computerChoice === "rock" && humanChoice == "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")) {
            computerScore++;
            computerScoreText.textContent++;
            log.textContent = "You Lose. " + humanChoice + " does not beat " + computerChoice + ".";
        } else {
            log.textContent = "Invalid user input.";
        }

        if (humanScore === 5) {
            log.textContent = "Final Result: Win!"
        } else if (computerScore === 5) {
            log.textContent = "Final Result: Loss."
        }    

        return;

    }

    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");

    rockButton.addEventListener("click", () => {playRound("rock")});
    paperButton.addEventListener("click", () => {playRound("paper")});
    scissorsButton.addEventListener("click", () => {playRound("scissors")});
 

} 

playGame();


