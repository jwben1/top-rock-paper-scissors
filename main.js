let computerScore = 0;
let playerScore = 0;

let playerMove;

const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');


rockBtn.addEventListener('click', () => {
    playGame('rock');
});
paperBtn.addEventListener('click', () => {
    playGame('paper');
});
scissorsBtn.addEventListener('click', () => {
    playGame('scissors');
});


function getcomputerMove() {
 const moves = ['rock','paper','scissors'];
return moves[Math.floor(Math.random() * moves.length)];
}

function disableBtn() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    
}

function playGame(playerMove) {
 const computerMove = getcomputerMove();

 if (computerScore >= 5) {
    console.log('You lost');
    disableBtn();
    return;
 } else if (playerScore >= 5) {
    console.log('You win');
    disableBtn();
    return;
 }
 
if (playerMove === 'rock' && computerMove === 'paper' ||
    playerMove === 'paper' && computerMove === 'scissors' ||
    playerMove === 'scissors' && computerMove === 'rock') {
    
    console.log(`You lost! , You: ${playerMove} vs Computer: ${computerMove}`);
    computerScore++;
} else if (playerMove === 'rock' && computerMove === 'scissors' ||
            playerMove === 'paper' && computerMove === 'rock' ||
            playerMove === 'scissors' && computerMove === 'paper'){

    console.log(`You won! , You: ${playerMove} vs Computer: ${computerMove}`);
    playerScore++;

} else {
    console.log(`Tie, You: ${playerMove} vs Computer: ${computerMove}`);
}
console.log(`Computer Score:${computerScore} Player Score:${playerScore}`);
}
