function gambarGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            gambarBox(grid, i, j);
        }
    }

    container.appendChild(grid);
}

function gambarBox(container, row, col, huruf = '') {
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = huruf;
    box.id = `box${row}${col}`;

    container.appendChild(box);
    return box;
}

function mulai() {
    const game = document.getElementById('game');
    gambarGrid(game);
}

mulai();