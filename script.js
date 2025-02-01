 const submitButton = document.getElementById("submit");
        const board = document.getElementById("board");
        const message = document.getElementById("message");
        let player1 = "";
        let player2 = "";
        let currentPlayer = "X";
        let currentName = "";
        let gameBoard = ["", "", "", "", "", "", "", "", ""];

        submitButton.addEventListener("click", () => {
            player1 = document.getElementById("player-1").value;
            player2 = document.getElementById("player-2").value;
            if (player1 && player2) {
                document.getElementById("setup").style.display = "none";
                board.style.display = "grid";
                currentName = player1;
                message.textContent = `${currentName}, you're up!`;
            }
        });

        board.addEventListener("click", (event) => {
            const cell = event.target;
            const cellIndex = cell.id - 1;
            if (gameBoard[cellIndex] === "" && cell.classList.contains("cell")) {
                gameBoard[cellIndex] = currentPlayer;
                cell.textContent = currentPlayer;
                if (checkWin()) {
                    message.textContent = `${currentName}, congratulations! You won!`;
                    board.style.pointerEvents = "none";
                    return;
                }
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                currentName = currentName === player1 ? player2 : player1;
                message.textContent = `${currentName}, you're up!`;
            }
        });

        function checkWin() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];
            return winPatterns.some(pattern => {
                const [a, b, c] = pattern;
                return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
            });
        }