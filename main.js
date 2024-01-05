let computerScore = 0;
let playerScore = 0;

// let playerMove;

const resultsPara = document.querySelector('.score');
const winnerPara = document.querySelector('.winner');
const movesPara = document.querySelector('.moves');

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
 
if (playerMove === 'rock' && computerMove === 'paper' ||
    playerMove === 'paper' && computerMove === 'scissors' ||
    playerMove === 'scissors' && computerMove === 'rock') {
    
		movesPara.innerHTML = `You lose! <br> <br> You: ${playerMove} vs Computer: ${computerMove}`;	
    computerScore++;
} else if (playerMove === 'rock' && computerMove === 'scissors' ||
            playerMove === 'paper' && computerMove === 'rock' ||
            playerMove === 'scissors' && computerMove === 'paper'){

		movesPara.innerHTML = `You win! <br> <br> You: ${playerMove} vs Computer: ${computerMove}`;				
    playerScore++;

} else {
	movesPara.innerHTML = `Tie! <br> <br> You: ${playerMove} vs Computer: ${computerMove}`;
}

resultsPara.innerHTML = `Your Score:${playerScore} Computer Score:${computerScore}`;

// check if the score is 5 and announce the winner
if (computerScore === 5) {
	winnerPara.innerHTML = 'You lost the game!';
	disableBtn();
	return;
} else if (playerScore === 5) {
	winnerPara.innerHTML = 'You won the game!';
	disableBtn();
	return;
}
}
