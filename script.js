const objects = ['rock', 'paper', 'scissors']
let playerSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function getComputerChoice() {
  const randomScore = Math.random() * objects.length;
  if (randomScore < 1) {
    return 'rock';
  } else if (randomScore < 2) {
    return 'paper';
  } else if (randomScore < 3) {
    return 'scissors'
  }
}

function getHumanChoice() {
  let input = prompt('Pick one, Rock, Paper or Scissors:')
  while (input === null) {
    prompt('Pick one, Rock, Paper or Scissors:')
    break
  }
  input = input.toLowerCase();
  if (input === 'rock') {
    return 'rock';
  } else if (input === 'paper') {
    return 'paper';
  } else {
    return 'scissors';
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound(input, randomScore) {
  if (input === randomScore) {
    console.log('Tie');
    console.log(`Score: ${playerScore}, ${computerScore}`);
  } else if (input === 'rock' && randomScore === 'scissors' || input === 'paper' && randomScore === 'rock' || input === 'scissors' && randomScore === 'paper') {
    playerScore++;
    console.log("You Won!");
    console.log(`Score: ${playerScore}, ${computerScore}`);
  } else {
    computerScore++;
    console.log("You Lost!");
    console.log(`Score: ${playerScore}, ${computerScore}`);
  }
  return input, randomScore;
}

playRound(playerSelection, computerSelection)

function playGame() {
  // Play the game 5 times
}