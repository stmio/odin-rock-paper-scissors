function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3) + 1;

  if (rng === 1) return "rock";
  if (rng === 2) return "paper";
  if (rng === 3) return "scissors";
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a draw! The computer chose " + computerSelection;
  }

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "You won! " + playerSelection + " beats " + computerSelection;
    } else {
      return "You lost! " + computerSelection + " beats " + playerSelection;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You won! " + playerSelection + " beats " + computerSelection;
    } else {
      return "You lost! " + computerSelection + " beats " + playerSelection;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "You won! " + playerSelection + " beats " + computerSelection;
    } else {
      return "You lost! " + computerSelection + " beats " + playerSelection;
    }
  }
}
