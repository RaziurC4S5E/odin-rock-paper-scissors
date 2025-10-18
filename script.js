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

// let value = prompt("Choose only one (Rock/Paper/Scissors): ");
    
// lowerValue = value.toLowerCase();
// if (!(lowerValue === 'rock') || !(lowerValue === 'paper') || !(lowerValue === 'scissors')) {
//     console.log("Choose Again");
//     value = prompt("Choose only one (Rock/Paper/Scissors: ");
// }
// console.log(value.toLowerCase());
