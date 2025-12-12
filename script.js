const userChoiceSpan = document.getElementById("user-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const winnerText = document.getElementById("winner");

const buttons = document.querySelectorAll(".choices button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.dataset.choice;
    userChoiceSpan.textContent = userChoice;

    const computerChoice = getComputerChoice();
    computerChoiceSpan.textContent = computerChoice;

    const winner = determineWinner(userChoice, computerChoice);
    winnerText.textContent = winner;
  });
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function determineWinner(user, computer) {
  if (user === computer) return "It's a draw!";

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You Win!";
  }

  return "Computer Wins!";
}
