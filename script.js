function getComputerChoice () {
    let value = Math.random();
    // console.log(value);

    if (value < 0.33) return 'Rock';
    else if(value < 0.66) return 'Paper';
    else return 'Scissors';
}

