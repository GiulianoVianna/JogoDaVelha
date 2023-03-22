let player = "X";
const cells = document.querySelectorAll(".cell");

function makeMove(event) {
    const cell = event.target;

    if (cell.dataset.cell !== "") {
        return;
    }

    cell.dataset.cell = player;
    cell.textContent = player;

    if (checkWinner(player)) {
        setTimeout(() => {
            alert(`Jogador ${player} ganhou!`);
            resetGame();
        }, 100);
        return;
    }

    if (checkDraw()) {
        setTimeout(() => {
            alert("Empate!");
            resetGame();
        }, 100);
        return;
    }

    player = player === "X" ? "O" : "X";
}

function checkWinner(player) {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const condition of winningConditions) {
        if (
            cells[condition[0]].dataset.cell === player &&
            cells[condition[1]].dataset.cell === player &&
            cells[condition[2]].dataset.cell === player
        ) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return Array.from(cells).every(cell => cell.dataset.cell !== "");
}

function resetGame() {
    player = "X";
    cells.forEach(cell => {
        cell.dataset.cell = "";
        cell.textContent = "";
    });
}
