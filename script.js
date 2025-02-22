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
  if ('rock') {
    return 'rock';
  } else if ('paper') {
    return 'paper';
  } else {
    return 'scissors';
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound(input, randomScore) {
  if (input === randomScore) {
    results.innerHTML = "Tie"
    score.innerText = `Score: ${playerScore}, ${computerScore}`
  } else if (input === 'rock' && randomScore === 'scissors' || input === 'paper' && randomScore === 'rock' || input === 'scissors' && randomScore === 'paper') {
    playerScore++;
    results.innerHTML = "You Won!"
    score.innerText = `Score: ${playerScore}, ${computerScore}`
  } else {
    computerScore++;
    results.innerHTML = "You Lost"
    score.innerText = `Score: ${playerScore}, ${computerScore}`
  }
  return input, randomScore;
}

function playGame() {
  // Play the game 5 times
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const score = document.querySelector("#score");
const results = document.querySelector("#results");
const pick = document.querySelector("#pick");
const reset = document.querySelector("#resetGame");
const scoreEnd = document.querySelector("#header2");

rock.addEventListener("click", () => {
  let playerSelection = "rock"
  let computerSelection = getComputerChoice();
  pick.innerText = `You picked ${playerSelection}, Computer Picked ${computerSelection}`;
  playRound(playerSelection, computerSelection)
  displayEnd();
})

paper.addEventListener("click", () => {
  let playerSelection = "paper"
  let computerSelection = getComputerChoice();
  pick.innerText = `You picked ${playerSelection}, Computer Picked ${computerSelection}`;
  playRound(playerSelection, computerSelection)
  displayEnd();
})

scissors.addEventListener("click", () => {
  let playerSelection = "scissors"
  let computerSelection = getComputerChoice();
  pick.innerText = `You picked ${playerSelection}, Computer Picked ${computerSelection}`;
  playRound(playerSelection, computerSelection)
  displayEnd();
})

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  score.innerText = `Score: ${playerScore}, ${computerScore}`
  scoreEnd.innerText = "";
  pick.innerText = "";
  results.innerText = "";
}

reset.addEventListener("click", () => {
  resetGame();
})

function displayEnd() {
  if (playerScore === 5) {
    scoreEnd.innerText = "You Won 5 rounds, Congrats!"
  } else if (computerScore === 5) {
    scoreEnd.innerText = "The computer Won 5 rounds."
  }
}