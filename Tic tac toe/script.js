const Gameboard = {
  board: Array(9).fill(null),

  displayBoard: function () {
    console.log(this.board);
  },
  updateBoard: function (index, symbol) {
    if (this.board[index] === null) {
      this.board[index] = symbol;
    }
  },
  isFull: function () {
    return this.board.every((cell) => cell !== null);
  },
  reset: function () {
    this.board.fill(null);
  },
};

function players(name, symbol) {
  return { name, symbol };
}

const GameController = {
  currentPlayer: null, // Will be set based on player selection
  gameActive: true,
  computerPlayer: "O", // Default computer player to 'O'
  difficulty: "unbeatable", // Default difficulty

  switchPlayer: function () {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  },
  checkWin: function () {
    let combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combinations.length; i++) {
      if (combinations[i].every((index) => Gameboard.board[index] === this.currentPlayer)) {
        this.gameActive = false;
        showEndGameMessage(`Player ${this.currentPlayer} wins!`);
        return true;
      }
    }
    // Check for draw (no empty spaces left)
    if (Gameboard.isFull()) {
      this.gameActive = false;
      showEndGameMessage(`It is a draw!`);
      return true;
    }
    return false;
  },

  computerMove: function () {
    let index;
    switch (this.difficulty) {
      case "easy":
        index = this.randomMove();
        break;
      case "medium":
        index = this.mediumMove();
        break;
      case "hard":
        index = this.hardMove();
        break;
      case "unbeatable":
      default:
        let bestMove = this.minimax(Gameboard.board, this.computerPlayer);
        index = bestMove.index;
        break;
    }
    console.log(`Computer chooses move: ${index}`);
    this.playTurn(index);
  },

  randomMove: function () {
    const availSpots = Gameboard.board
      .map((val, index) => (val === null ? index : null))
      .filter((val) => val !== null);
    return availSpots[Math.floor(Math.random() * availSpots.length)];
  },

  mediumMove: function () {
    // Try to block player from winning
    const player = this.currentPlayer === "X" ? "O" : "X"; // Assuming current player is computer
    for (let i = 0; i < Gameboard.board.length; i++) {
      if (Gameboard.board[i] === null) {
        Gameboard.board[i] = player;
        if (this.checkWinState(Gameboard.board, player)) {
          Gameboard.board[i] = null;
          return i; // Block the player
        }
        Gameboard.board[i] = null;
      }
    }
    // If no block needed, make a random move
    return this.randomMove();
  },

  hardMove: function () {
    // Some advanced strategy but not perfect
    const availSpots = Gameboard.board
      .map((val, index) => (val === null ? index : null))
      .filter((val) => val !== null);

    // Block player if they can win in the next move
    const player = this.currentPlayer === "X" ? "O" : "X";
    for (let i = 0; i < availSpots.length; i++) {
      let index = availSpots[i];
      Gameboard.board[index] = player;
      if (this.checkWinState(Gameboard.board, player)) {
        Gameboard.board[index] = null;
        return index; // Block the player
      }
      Gameboard.board[index] = null;
    }

    // Else, make a strategic move
    for (let i = 0; i < availSpots.length; i++) {
      let index = availSpots[i];
      Gameboard.board[index] = this.computerPlayer;
      if (this.checkWinState(Gameboard.board, this.computerPlayer)) {
        Gameboard.board[index] = null;
        return index; // Winning move
      }
      Gameboard.board[index] = null;
    }

    // No immediate winning move, random move
    return this.randomMove();
  },

  minimax: function (newBoard, player) {
    const availSpots = newBoard
      .map((val, index) => (val === null ? index : null))
      .filter((val) => val !== null);

    // Check for terminal states: win, lose, or draw
    if (this.checkWinState(newBoard, "X")) {
      return { score: -10 }; // Player win
    } else if (this.checkWinState(newBoard, "O")) {
      return { score: 10 }; // Computer win
    } else if (availSpots.length === 0) {
      return { score: 0 }; // Draw
    }

    // Collect the scores from each available spot to evaluate moves
    let moves = [];
    for (let i = 0; i < availSpots.length; i++) {
      let move = {};
      move.index = availSpots[i];
      newBoard[availSpots[i]] = player;

      if (player === "O") {
        let result = this.minimax(newBoard, "X");
        move.score = result.score;
      } else {
        let result = this.minimax(newBoard, "O");
        move.score = result.score;
      }

      newBoard[availSpots[i]] = null; // Undo move
      moves.push(move);
    }

    // Choose the best move based on scores
    let bestMove;
    if (player === "O") {
      let bestScore = -Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = moves[i];
        }
      }
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = moves[i];
        }
      }
    }
    return bestMove;
  },

  checkWinState: function (board, player) {
    let combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combinations.length; i++) {
      if (combinations[i].every((index) => board[index] === player)) {
        return true;
      }
    }
    return false;
  },

  resetGame: function () {
    Gameboard.reset();
    this.gameActive = true;
    document.querySelectorAll(".cell").forEach((cell) => (cell.textContent = "")); // Clear the board visually
  },

  setFirstPlayer: function (player) {
    this.currentPlayer = player.symbol;
    this.computerPlayer = this.currentPlayer === "X" ? "O" : "X"; // Set computer player to the opposite symbol
  },

  playTurn: function (index) {
    if (this.gameActive && Gameboard.board[index] === null) {
      console.log("working", index);
      Gameboard.updateBoard(index, this.currentPlayer);
      document.getElementById(index).textContent = this.currentPlayer; // Update the cell text
      if (!this.checkWin() && this.gameActive) {
        this.switchPlayer();
        if (this.currentPlayer === this.computerPlayer) {
          this.computerMove(); // Computer makes a move
        }
      }
    }
  },
};

function startGame() {
  GameController.resetGame(); // Ensure the game is reset before starting

  // Set event listeners for player moves
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", function () {
      const index = parseInt(this.id, 10);
      GameController.playTurn(index);
    });
  });
}

const showEndGameMessage = (message) => {
  const cover = document.createElement("div");
  cover.setAttribute("class", "cover");
  document.body.append(cover);

  const div = document.createElement("div");
  setTimeout(() => {
    document.body.append(div);
  }, 100);
  div.className = "alert";

  const game = document.createElement("b");
  div.append(game);
  game.textContent = "GAME OVER";

  const br1 = document.createElement("br");
  div.append(br1);
  const br2 = document.createElement("br");
  div.append(br2);

  const status = document.createElement("b");
  div.append(status);
  status.textContent = message;

  const br3 = document.createElement("br");
  div.append(br3);
  const br4 = document.createElement("br");
  div.append(br4);

  const button = document.createElement("button");
  button.innerText = "RESTART";
  div.append(button);

  button.addEventListener("click", function () {
    GameController.resetGame();
    document.body.removeChild(div);
    document.body.removeChild(cover);
  });
};

// Set event listeners for difficulty selection
document.querySelector("#difficulty").addEventListener("change", function (e) {
  GameController.difficulty = e.target.value;
  console.log(`Difficulty set to: ${GameController.difficulty}`);
});

document.querySelector("#player-x").addEventListener("click", function () {
  const player = players("PlayerX", "X");
  GameController.setFirstPlayer(player);
  startGame();
});

document.querySelector("#player-o").addEventListener("click", function () {
  const player = players("PlayerO", "O");
  GameController.setFirstPlayer(player);
  startGame();
});

document.querySelector("#restart").addEventListener("click", function () {});
