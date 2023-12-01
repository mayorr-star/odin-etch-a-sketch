const grid = document.querySelector(".grid");
const buttonBox = document.querySelector(".button-box");

window.addEventListener("DOMContentLoaded", createGrid(16))

function createGrid(size) {
    for (let rows = 0; rows < size; rows++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let columns = 0; columns < size; columns++) {
            const cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            row.appendChild(cell);
            grid.appendChild(row)
        }
    }
}
