//vou criar uma variavel que vai definir cada quadrado e vai definir se vai estar vazio ou com x ou y
let board = ["", "", "", "", "", "", "", "", ""];

//controla a vez do jogador, sendo 0 para o jogador 1 e 1 para o jogador 2
let playerTime = 0;

let symbols = ["o", "x"];

let gameOver = false;

function handMove(position) {
  if (gameOver) {
    return;
  }
  if (board[position]  == '') {
    board[position] = symbols[playerTime];

    gameOver = isWin();

    if (gameOver == false) {
      if (playerTime == 0) {
        playerTime = 1;
      } else {
        playerTime = 0;
      }
    }
  }
  return gameOver;
}

function isWin() {
  let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 5],
    [2, 4, 6],
  ];

  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];

    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ''
    ) {
      return true;
    }
  }

  return false;
}
