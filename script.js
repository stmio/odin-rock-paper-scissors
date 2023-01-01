let playerScore = 0,
  computerScore = 0;

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

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(
      playRound(prompt("Rock, paper or scissors?"), getComputerChoice())
    );
  }

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

game();
