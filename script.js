function getComputerChoice () {
    let value = Math.random();
    // console.log(value);

    if (value < 0.33) return 'rock';
    else if(value < 0.66) return 'paper';
    else return 'scissors';
}

function getHumanChoice() {
    let value = prompt("Choose only one (Rock/Paper/Scissors): ");
    return value.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (humanSelection === computerSelection){
        console.log("Draw");
    }

    else if (humanSelection == 'rock' && computerSelection == 'scissors'
        || humanSelection == 'paper' && computerSelection == 'rock' 
        || humanSelection == 'scissors' && computerSelection == 'paper'){
            console.log("You Win! " + humanSelection + " beats " + computerSelection);
            humanScore += 1;
            console.log("Your current score: " + humanScore);
        }

        
    else {
            console.log("You lost! " + computerSelection + " beats " + humanSelection);
            computerScore += 1;
            console.log("Computer's current score: " + computerScore);
        }

}

