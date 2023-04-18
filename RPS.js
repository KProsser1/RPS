function playRound (playerSelect, comSelect) {
    playerSelect = prompt("Rock, Paper, or Scissors?").toLowerCase();
    const com = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random()*com.length);

    comSelect = com[rand];
    console.log("You picked: " + playerSelect + '.');
    console.log("The CPU picked: " + comSelect + '.');

    if (playerSelect === comSelect) {
        console.log("It's a tie!");
    } else if (playerSelect === "paper" && comSelect === "rock") {
        console.log("Paper beats rock, you win!");
    } else if (playerSelect === "paper" && comSelect === "scissors") {
        console.log("Paper gets cut by scissors, you lose!");
    } else if (playerSelect === "scissors" && comSelect === "rock") {
        console.log("Scissors gets crushed by rock, you lose!");
    } else if (playerSelect === "scissors" && comSelect === "paper") {
        console.log("Scissors cuts paper, you win!");
    } else if (playerSelect === "rock" && comSelect === "paper") {
        console.log("Rock is covered by paper, you lose!");
    } else if (playerSelect === "rock" && comSelect === "scissors") {
        console.log("Rock crushes scissors, you win!");
    }
    }
    
    function Again(PlayAgain) {
    PlayAgain = prompt("Would you like to play again? Yes/No: ").toLowerCase();
    if (PlayAgain === 'yes') {
        game();
    } else {
        console.log("You have chosen not to play again, have a good day!");
    }
    }
    
    function game() {
        let Plays = 0;
        if (Plays < 5) {
            playRound();
            Plays += 1; 
        } else {
            Again();
        }
    }

