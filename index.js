const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors", "lizard", "spock"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "spock" && moveTwo === "scissors") ||
    (moveOne === "spock" && moveTwo === "rock") ||
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "scissors" && moveTwo === "lizard") ||
    (moveOne === "rock" && moveTwo === "lizard") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "lizard" && moveTwo === "spock") ||
    (moveOne === "lizard" && moveTwo === "papers") ||
    (moveOne === "paper" && moveTwo === "rock") ||
    (moveOne === "paper" && moveTwo === "spock")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }
};

const playGame = () => {
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {
  document.getElementById("player-one-move__img").src = `images/${moveOne}.png`;
  document.getElementById("player-one-move__name").innerText = moveOne;
  document.getElementById("player-two-move__img").src = `images/${moveTwo}.png`;
  document.getElementById("player-two-move__name").innerText = moveTwo;

  const outcomeEl = document.createElement("p");
  outcomeEl.classList.add("outcome");
  outcomeEl.setAttribute("id", "outcome");
  document.body.appendChild(outcomeEl);
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
