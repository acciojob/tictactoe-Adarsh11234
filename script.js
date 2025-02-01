submitButton.addEventListener("click", () => {
    const player1Input = document.getElementById("player-1");
    const player2Input = document.getElementById("player-2");

    if (!player1Input || !player2Input) {
        console.error("Player input fields are missing.");
        return;
    }

    player1 = player1Input.value.trim();
    player2 = player2Input.value.trim();

    if (player1 && player2) {
        document.getElementById("setup").style.display = "none";
        board.style.display = "grid";
        currentName = player1;
        message.textContent = `${currentName}, you're up!`;
    }
});
