function getComputerChoice () {
 const randomNum = Math.floor(Math.random() * 3) + 1;
//  console.log(randomNum);

 if (randomNum === 1) {
    return 'rock';
 } else if (randomNum === 2) {
    return 'paper';
 } else if (randomNum === 3) {
    return 'scissors';
 }

}

function playRound(playerSelection, computerSelection) {
const playerChoice = playerSelection;
// console.log(playerChoice); 

if (playerChoice === 'rock') {
    if (computerSelection === 'rock') {
        console.log(`Tie! ${playerChoice} and ${computerSelection}`);
       
    } else if (computerSelection === 'paper') {
        console.log(`You lose! ${computerSelection} beats ${playerChoice}`);
    } else if (computerSelection === 'scissors') {
        console.log(`You win! ${playerChoice} beats ${computerSelection}`);
    }
} else if (playerChoice === 'paper') {
    if (computerSelection === 'rock') {
        console.log(`You win! ${playerChoice} beats ${computerSelection}`);
    } else if (computerSelection === 'paper') {
        console.log(`Tie! ${computerSelection} and ${playerChoice}`);
    } else if (computerSelection === 'scissors') {
        console.log(`You lose! ${computerSelection} beats ${playerChoice}`);
    }
} else if (playerChoice === 'scissors') {
    if (computerSelection === 'sccissors') {
        console.log(`Tie! ${playerChoice} and ${computerSelection}`);
    } else if (computerSelection === 'rock') {
        console.log(`You lose! ${computerSelection} beats ${playerChoice}`);
    } else if (computerSelection === 'paper') {
        console.log(`You win! ${playerChoice} beats ${computerSelection}`);
    }
}
}

let playerSelection = prompt('Your move:');
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();


console.log(playRound(playerSelection, computerSelection));

