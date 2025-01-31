
document.getElementById('submit').addEventListener('click', startGame);

let player1, player2;
let currentPlayer;
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function startGame() {
  player1 = document.getElementById('player-1').value || 'Player 1';
  player2 = document.getElementById('player-2').value || 'Player 2';

  document.getElementById('name-input').style.display = 'none';
  document.getElementById('game').style.display = 'block';

  currentPlayer = player1;
  updateMessage(`${currentPlayer}, you're up!`);

  document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', handleCellClick);
  });
}

function handleCellClick(event) {
  const cell = event.target;
  const cellId = cell.id - 1;

  if (board[cellId] !== '' || !gameActive) return;

  board[cellId] = currentPlayer === player1 ? 'X' : 'O';
  cell.textContent = board[cellId];

  if (checkWin()) {
    updateMessage(`${currentPlayer} congratulations, you won!`);
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== '')) {
    updateMessage("It's a draw!");
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === player1 ? player2 : player1;
  updateMessage(`${currentPlayer}, you're up!`);
}

function checkWin() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  return winConditions.some(condition => {
    return condition.every(index => {
      return board[index] === (currentPlayer === player1 ? 'X' : 'O');
    });
  });
}

function updateMessage(message) {
  document.querySelector('.message').textContent = message;
}
