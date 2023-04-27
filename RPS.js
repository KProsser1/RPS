const game = () => {
    let playerScore = 0;
    let robotScore = 0;
    

    const playRound = () => {
        const PlayInfo = document.querySelector('.PlayText');
        PlayInfo.innerText = 'Choose Rock, Paper, or Scissors and try to beat the Robots!';
        const RockBtn = document.querySelector('.rock');
        const PaperBtn = document.querySelector('.paper');
        const ScissorsBtn = document.querySelector('.scissors');
        const playerChoices = [RockBtn,PaperBtn,ScissorsBtn];
        const robotChoices = ['rock','paper','scissors']
        //const resultText = document.querySelector('.text')

        playerChoices.forEach(choice => {
            choice.addEventListener('click',function(){

                const robotNumber = Math.floor(Math.random()*3);
                const robotAttack = robotChoices[robotNumber];

                winner(this.innerText,robotAttack)

                if(playerScore == 5){
                    gameOverPlayer()
                }
                if (robotScore == 5){
                    gameOverRobot()
                } 
            })
        })

    }

    const winner = (player, robot) => {
        const result = document.querySelector('.results');
        const playerScore = document.querySelector('.p-count');
        const robotScore = document.querySelector('.r-count');
        player = player.toLowerCase();
        robot = robot.toLowerCase();
        if (player === robot){
            result.textContent = 'The attacks cancel each other out!'
        }
        else if(player == 'rock'){
            if(robot == 'paper'){
                result.textContent = 'The robot"s paper attack has wrapped up your rock!';
                robotScore++;
                robotScoreBoard.textContent = robotScore;
            
            }else{
                result.textContent = 'Your rock smashes the robot"s feeble scissors!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(robot == 'rock'){
                result.textContent = 'The robot"s rock was too powerful for your scissors!';
                robotScore++;
                robotScoreBoard.textContent = robotScore;
            }else{
                result.textContent = 'Your scissors sliced easily through the robot"s paper!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(robot == 'scissors'){
                result.textContent = 'The robot"s scissors were simply too sharp against your paper';
                robotScore ++;
                robotScoreBoard.textContent = robotScore;
            }else{
                result.textContent = 'Your paper wrapped the robot"s rock, stopping it in it"s tracks!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    const gameOverPlayer = () => {

        const outcome = document.querySelector('.results');
        const againBtn = document.querySelector('.Again');

        outcome.innerText = 'The Robots have fallen! A new message from the General awaits above ^';
        
        againBtn.innerText = 'Relive the Battle';
        againBtn.style.display = 'flex'
        againBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }

    const gameOverRobot = () => {

        const outcome = document.querySelector('.results');
        const againBtn = document.querySelector('.Again');

        outcome.innerText = 'All praise our new Robot Overlords. A message from the general awaits ^';
        
        againBtn.innerText = 'Rewind Time';
        againBtn.style.display = 'flex'
        againBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }

    playRound();
}







/*function playRound (playerSelect, comSelect) {
    playerSelect = prompt('Choose');
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

function ButtonSelect(e) {
    e.target.classList.add('choice');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('choice');
}

const butts = document.querySelectorAll('button');
//butts.forEach(button => button.addEventListener ('transitionend', removeTransition));
butts.forEach(button => button.addEventListener ('click', ButtonSelect));
*/

