const arr = [
  {
    name: "Lizard",
    img: "lizard.png",
  },
  {
    name: "Paper",
    img: "paper.png",
  },
  {
    name: "Rock",
    img: "rock.png",
  },
  {
    name: "Scissor",
    img: "scissor.png",
  },
  {
    name: "Spock",
    img: "spock.png",
  },
];

const imageFolderPath = "assets";

const rules = {
  Lizard: ["Spock", "Paper"],

  Paper: ["Rock", "Spock"],

  Rock: ["Lizard", "Scissor"],

  Scissor: ["Paper", "Lizard"],

  Spock: ["Scissor", "Rock"],
};

const playerOptions = document.querySelectorAll(
  "#player1 .available-options .option"
);

const botOptions = document.querySelectorAll(
  "#player2 .available-options .option"
);

const playerShowArea = document.querySelector(
  "#player1 .selected-option .option"
);

const botShowArea = document.querySelector("#player2 .selected-option .option");

const player1Score = document.querySelector("#player1-score");
const player2Score = document.querySelector("#player2-score");

const roundMessage = document.querySelector("#round-message");

playerOptions.forEach((e) => {
  e.addEventListener("click", () => {
    play(e);
  });
});

function play(e) {
  const player = arr[e.dataset.index];
  const length = arr.length;
  const botIndex = Math.floor(Math.random() * length);
  const bot = arr[botIndex];

  showPlayerOption(playerShowArea, player);
  showPlayerOption(botShowArea, bot);
}

function generateImgElement(player) {
  const img = document.createElement("img");
  img.src = `${imageFolderPath}/${player.img}`;
  img.alt = `${player.name}`;
  img.title = `${player.name}`;
  return img;
}

function showPlayerOption(showArea, player) {
  const img = generateImgElement(player);

  showArea.innerHTML = "";
  showArea.appendChild(img);
}

// reset

// highlightSelectedOption

// showMessage

//! Claculate function for player 1, player 2 scores (calculateScore with player1, player2)

//! Change the score (addScore with player)

//TODO:: *** confity, alert message, storage score, if the difference is 15 and biger, then reset game and new game start, if I want to add a third player option add it ***
