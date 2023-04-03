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

//plays 5 rounds of RPS
//returns string that declares winner
function game() {
  let running = true;
  let round = 0;
  while (running) {
    round = round + 1;
    if (round >= 5) {
      running = false;
    } else {
      //plays one round of RPS
      function playRound(playerSelection, computerSelection) {
        computerSelection = getComputerChoice();
        playerSelection = prompt(
          "Choose your weapon. Rock, Paper OR Scissors?"
        ).toLowerCase();
        if (playerSelection === computerSelection) {
          return "A quick draw but both opponents wits were evenly matched.";
        } else if (
          (playerSelection === "rock" && computerSelection === "scissors") ||
          (playerSelection === "paper" && computerSelection === "rock") ||
          (playerSelection === "scissors" && computerSelection === "paper")
        ) {
          playerScore = playerScore + 1;
          return "You won this round. But was it merely luck?";
        } else {
          computerScore = computerScore + 1;
          return "The A.I. wins this round over man. Is it over for mankind or just a lucky break for technology.";
        }
      }
      //logs returned string to console
      console.log(playRound(playerSelection, computerSelection));
    }
  }
}
//compares player score with cpu score and returns
//match result
function checkWinner(humanScore, aiScore) {
  if (humanScore > aiScore) {
    console.log("The Humans WIN! ...this time.");
  } else if (humanScore < aiScore) {
    console.log("The AI have won. ...for now. ");
  } else {
    console.log(
      "The Humans and AI are...I can't believe it...they're working together. (It's a Tie)"
    );
  }
}

game();
checkWinner(playerScore, computerScore);

//add button functionality to restart the game
const restartButton = document.querySelector("#playAgain");

restartButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  game();
});
