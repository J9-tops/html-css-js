const wins = document.querySelector(".number-of-wins") as HTMLParagraphElement;
const losses = document.querySelector(".number-of-losses") as HTMLParagraphElement;
const ties = document.querySelector(".number-of-ties") as HTMLParagraphElement;
const reset = document.querySelector(".reset-score-button") as HTMLButtonElement;
const choice = document.querySelectorAll(".choice") as NodeListOf<Element>;
const compImg = document.querySelector("#computer-choice-image") as HTMLImageElement;
const userImg = document.querySelector("#user-choice-image") as HTMLImageElement;

function computerChoice() {
  let computer: string;
  const rand = Math.floor(Math.random() * 3);
  if (rand === 0) {
    computer = "rock";
    compImg.src = "./images/rock-emoji.png";
  } else if (rand === 1) {
    computer = "paper";
    compImg.src = "./images/paper-emoji.png";
  } else {
    computer = "scissors";
    compImg.src = "./images/scissors-emoji.png";
  }
  return computer;
}

let tieCount = 0;
let winCount = 0;
let lossCount = 0;

[...choice].forEach((choice) => {
  choice.addEventListener("click", (e) => {
    let cpu = computerChoice();
    let userChoice = choice.getAttribute("id");
    //user display images
    switch (userChoice) {
      case "paper":
        userImg.src = "./images/paper-emoji.png";
        break;
      case "rock":
        userImg.src = "./images/rock-emoji.png";
        break;
      default:
        userImg.src = "./images/scissors-emoji.png";
    }

    switch (`${cpu}, ${userChoice}`) {
      case "paper, scissors":
      case "rock, paper":
      case "scissors, rock":
        ++winCount;
        wins.innerText = winCount.toString();
        break;
      case "scissors, paper":
      case "paper, rock":
      case "rock, scissors":
        ++lossCount;
        losses.innerText = lossCount.toString();
        break;
      default:
        ++tieCount;
        ties.innerText = tieCount.toString();
    }
  });
});

reset.addEventListener("click", () => {
  tieCount = 0;
  winCount = 0;
  lossCount = 0;
  wins.innerText = "";
  losses.innerText = "";
  ties.innerText = "";
  userImg.src = "";
  compImg.src = "";
});
