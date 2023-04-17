"use strict";

let playerSelection;
let playerScore = 0;
let computerSelection;
let computerScore = 0;

//get computers choice use RNG
function getComputerChoice() {
  const rng = Math.floor(Math.random() * 3);
  if (rng === 0) {
    return "rock";
  } else if (rng === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

const playingWithRock = function () {
  playerSelection = "rock";
  playRound();
};

const playingWithPaper = function () {
  playerSelection = "paper";
  playRound();
};

const playingWithScissors = function () {
  playerSelection = "scissors";
  playRound();
};

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

rockBtn.addEventListener("click", () => {
  playingWithRock();
});

paperBtn.addEventListener("click", () => {
  playingWithPaper();
});

scissorsBtn.addEventListener("click", () => {
  playingWithScissors();
});

const result = document.querySelector("#result");

const playRound = () => {
  computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    result.textContent =
      "A quick draw but both opponents wits were evenly matched.";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    document.getElementById("player-score").textContent = playerScore;
    result.textContent = "You won this round. But was it merely luck?";
    if (playerScore === 5 || computerScore === 5) {
      checkWinner(playerScore, computerScore);
    }
  } else {
    computerScore++;
    document.getElementById("computer-score").textContent = computerScore;
    result.textContent =
      "The A.I. wins this round over man. Is it over for mankind or just a lucky break for technology.";
    if (playerScore === 5 || computerScore === 5) {
      checkWinner(playerScore, computerScore);
    }
  }
};

//compares player score with cpu score and returns
//match result
function checkWinner(humanScore, aiScore) {
  if (humanScore > aiScore) {
    result.textContent = "The Humans WIN! ...this time.";
  } else if (humanScore < aiScore) {
    result.textContent = "The AI have won. ...for now. ";
  } else {
    result.textContent =
      "The Humans and AI are...I can't believe it...they're working together. (It's a Tie)";
  }
}

//add button functionality to restart the game
const restartButton = document.querySelector("#playAgain");

restartButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  result.textContent = "Choose your weapon";
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
});
