//Variables
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const numberOfWins = document.querySelector(".number-of-wins");
const numberOfLosses = document.querySelector(".number-of-losses");
const numberOfTies = document.querySelector(".number-of-ties");
const userChoiceImage = document.querySelector("#user-choice-image");
const computerChoiceImage = document.querySelector("#computer-choice-image");
const resetScoreButton = document.querySelector(".reset-score-button");
const choices = [
  { name: "rock", imgSrc: "images/rock-emoji.png" },
  { name: "paper", imgSrc: "images/paper-emoji.png" },
  { name: "scissors", imgSrc: "images/scissors-emoji.png" },
];
let comChoice;
let wins = 0;
let losses = 0;
let ties = 0;

function computerChoice() {
  let randomIndex = Math.floor(Math.random() * choices.length);
  let compChoiceName = choices[randomIndex].name;
  let compChoiceImageSrc = choices[randomIndex].imgSrc;
  console.log(`${compChoiceName} is computer choice`);
  return [compChoiceName, compChoiceImageSrc];
}

function checkWinner(player, computer) {
  const [compChoiceName, compChoiceImage] = computer;
  if (player === compChoiceName) {
    computerChoiceImage.src = compChoiceImage;
    ties += 1;
    numberOfTies.textContent = `${ties}`;
  } else if (player === "rock" && compChoiceName === "scissors") {
    computerChoiceImage.src = compChoiceImage;
    wins += 1;
    numberOfWins.textContent = `${wins}`;
  } else if (player === "paper" && compChoiceName === "rock") {
    computerChoiceImage.src = compChoiceImage;
    wins += 1;
    numberOfWins.textContent = `${wins}`;
  } else if (player === "scissors" && compChoiceName === "paper") {
    computerChoiceImage.src = compChoiceImage;
    wins += 1;
    numberOfWins.textContent = `${wins}`;
  } else {
    computerChoiceImage.src = compChoiceImage;
    losses += 1;
    numberOfLosses.textContent = `${losses}`;
  }
  resetScoreButton.addEventListener("click", function () {
    wins = 0;
    numberOfWins.textContent = wins;
    losses = 0;
    numberOfLosses.textContent = losses;
    ties = 0;
    numberOfTies.textContent = ties;
    userChoiceImage.src = "";
    computerChoiceImage.src = "";
  });
}

function playerChoice() {
  rock.addEventListener("click", () => {
    userChoiceImage.src = "images/rock-emoji.png";
    let userChoice = "rock";
    checkWinner(userChoice, computerChoice());
  });

  paper.addEventListener("click", () => {
    userChoiceImage.src = "images/paper-emoji.png";
    let userChoice = "paper";
    checkWinner(userChoice, computerChoice());
  });
  scissors.addEventListener("click", () => {
    userChoiceImage.src = "images/scissors-emoji.png";
    let userChoice = "scissors";
    checkWinner(userChoice, computerChoice());
  });
}

playerChoice();
