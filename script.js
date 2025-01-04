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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "You Tied.";
    } else if ((humanChoice === "rock" && computerChoice == "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        return "You Win! " + humanChoice + " beats " + computerChoice + ".";
    } else if ((computerChoice === "rock" && humanChoice == "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")) {
        computerScore++;
        return "You Lose. " + humanChoice + " does not beat " + computerChoice + ".";
    } else {
        return "Invalid user input.";
    }

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice().toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("You Tied.");
        } else if ((humanChoice === "rock" && computerChoice == "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            console.log("You Win! " + humanChoice + " beats " + computerChoice + ".");
        } else if ((computerChoice === "rock" && humanChoice == "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")) {
            computerScore++;
            console.log("You Lose. " + humanChoice + " does not beat " + computerChoice + ".");
        } else {
            console.log("Invalid user input.");
        }

        return;

    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore > computerScore) {
        console.log("Final Result: You have Won!");;
    } else if (computerScore > humanScore) {
        console.log("Final Result: You have Lost.");
    } else {
        console.log("Final Result: You Tied.");
    }
} 

playGame();


