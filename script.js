function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3) + 1;

  if (rng === 1) return "rock";
  if (rng === 2) return "paper";
  if (rng === 3) return "scissors";
}
