let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3) + 1;

  if (rng === 1) return "rock";
  if (rng === 2) return "paper";
  if (rng === 3) return "scissors";
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  updateEmoji(playerSelection, computerSelection);

  if (playerSelection === computerSelection) {
    return "It's a draw! The computer chose " + computerSelection;
  }

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      return "You won! " + playerSelection + " beats " + computerSelection;
    } else {
      computerScore++;
      return "You lost! " + computerSelection + " beats " + playerSelection;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return "You won! " + playerSelection + " beats " + computerSelection;
    } else {
      computerScore++;
      return "You lost! " + computerSelection + " beats " + playerSelection;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      playerScore++;
      return "You won! " + playerSelection + " beats " + computerSelection;
    } else {
      computerScore++;
      return "You lost! " + computerSelection + " beats " + playerSelection;
    }
  } else {
    computerScore++;
    return "You lost - input a valid option!";
  }
}

function updateEmoji(player, computer) {
  const playerEmoji = document.getElementById("player-selection");
  const computerEmoji = document.getElementById("computer-selection");

  if (player == "rock") playerEmoji.textContent = "✊";
  if (player == "paper") playerEmoji.textContent = "✋";
  if (player == "scissors") playerEmoji.textContent = "✌️";

  if (computer == "rock") computerEmoji.textContent = "✊";
  if (computer == "paper") computerEmoji.textContent = "✋";
  if (computer == "scissors") computerEmoji.textContent = "✌️";
}

function updateScore(player, computer) {
  const playerScore = document.getElementById("player-score");
  const computerScore = document.getElementById("computer-score");

  playerScore.textContent = player;
  computerScore.textContent = computer;
}

function game() {
  console.log(
    playerScore > computerScore
      ? "You win!"
      : playerScore < computerScore
      ? "You lose!"
      : "It's a draw!"
  );

  console.log("You had " + playerScore + " points.");
  console.log("The computer had " + computerScore + " points.");
}

const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(playRound(button.id, getComputerChoice()));
    updateScore(playerScore, computerScore);
  });
});

// game();
