function getComputerChoice () {
    let value = Math.floor(Math.random() * 3) +1;
    // console.log(value);

    if (value === 1) return 'rock';
    else if(value === 2) return 'paper';
    else return 'scissors';
}

function getHumanChoice() {
    let value = prompt("Choose only one (Rock/Paper/Scissors): ");
    return value.toLowerCase();
}



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

function playGame() {
    let time = 5;
    for (let i = 1; i <=time; i++) {
        playRound();
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();
console.log("After 5 rounds, your score is " + humanScore + " and computer score is " +computerScore);

