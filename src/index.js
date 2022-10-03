function gambarBox(container, row, col, huruf = " ") {
    const box = document.createElement("div");
    box.className = "box";
    box.id = `box${row}${col}`;
    box.konten = huruf;

    container.appendChild(box);
    return box;
}

function gambarGrid(container) {
    const grid = document.createElement("grid");
    grid.className = "grid"

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            gambarBox(grid, i, j);
        }
    }
    container.appendChild(grid);
}

function mulai() {
    const game = document.getElementById("game");
    gambarGrid(game);
}

mulai();