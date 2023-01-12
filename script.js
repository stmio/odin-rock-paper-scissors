let playerScore = 0;
let computerScore = 0;
let roundEnded = false;

function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3) + 1;

  if (rng === 1) return "rock";
  if (rng === 2) return "paper";
  if (rng === 3) return "scissors";
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRoundOutcome(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "draw";

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") return "won";
    else return "lost";
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") return "won";
    else return "lost";
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") return "won";
    else return "lost";
  }
}

function updateMessage(outcome, playerSelection, computerSelection) {
  const roundOutcome = document.getElementById("round-outcome");
  const roundInfo = document.getElementById("round-info");

  playerSelection = capitalizeFirstLetter(playerSelection);

  if (outcome === "draw") {
    roundOutcome.textContent = "It's a draw.";
    roundInfo.textContent = playerSelection + " ties with " + computerSelection;
  }
  if (outcome === "won") {
    roundOutcome.textContent = "You won!";
    roundInfo.textContent = playerSelection + " beats " + computerSelection;
  }
  if (outcome === "lost") {
    roundOutcome.textContent = "You lost.";
    roundInfo.textContent =
      playerSelection + " loses against " + computerSelection;
  }
}

function updateEmoji(player, computer) {
  const playerEmoji = document.getElementById("player-selection");
  const computerEmoji = document.getElementById("computer-selection");

  if (player === "rock") playerEmoji.textContent = "✊";
  if (player === "paper") playerEmoji.textContent = "✋";
  if (player === "scissors") playerEmoji.textContent = "✌️";

  if (computer === "rock") computerEmoji.textContent = "✊";
  if (computer === "paper") computerEmoji.textContent = "✋";
  if (computer === "scissors") computerEmoji.textContent = "✌️";
}

function updateScore(player, computer) {
  const playerScore = document.getElementById("player-score");
  const computerScore = document.getElementById("computer-score");

  playerScore.textContent = player;
  computerScore.textContent = computer;
}

function resetGame() {
  playerScore = computerScore = 0;
  roundEnded = false;

  const endGameMessage = document.querySelector(".end-game");
  const roundOutcome = document.getElementById("round-outcome");
  const roundInfo = document.getElementById("round-info");
  const playerEmoji = document.getElementById("player-selection");
  const computerEmoji = document.getElementById("computer-selection");
  const playerScoreCounter = document.getElementById("player-score");
  const computerScoreCounter = document.getElementById("computer-score");

  endGameMessage.style.display = "none";
  roundOutcome.textContent = "Select an option!";
  roundInfo.textContent = "First player to 5 points wins!";
  playerEmoji.textContent = computerEmoji.textContent = "❔";
  playerScoreCounter.textContent = computerScoreCounter.textContent = "0";
}

function playRound(player) {
  const computer = getComputerChoice();
  const outcome = getRoundOutcome(player, computer);

  if (!roundEnded) {
    if (outcome === "won") playerScore++;
    if (outcome === "lost") computerScore++;

    updateMessage(outcome, player, computer);
    updateEmoji(player, computer);
    updateScore(playerScore, computerScore);

    if (playerScore === 5) endGame(true);
    if (computerScore === 5) endGame(false);
  }
}

function endGame(won) {
  const endGameMessage = document.querySelector(".end-game");
  const outcomeMessage = document.getElementById("game-outcome");
  const playAgainButton = document.getElementById("play-again");

  roundEnded = true;

  if (won) {
    outcomeMessage.textContent = "You won! Do you want to play again?";
  } else {
    outcomeMessage.textContent = "You lost. Do you want to play again?";
  }

  playAgainButton.addEventListener("click", resetGame);

  endGameMessage.style.display = "block";
}

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) =>
  button.addEventListener("click", () => playRound(button.id))
);
