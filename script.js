const grid = document.querySelector(".grid");
const buttonBox = document.querySelector(".button-box");
const buttons = document.querySelectorAll(".extra");

window.addEventListener("DOMContentLoaded", createGrid(16))

function createGrid(size) {
    grid.innerHTML = ""
    for (let rows = 0; rows < size; rows++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let columns = 0; columns < size; columns++) {
            const cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            row.appendChild(cell);
            grid.appendChild(row)
            cell.addEventListener("mouseover", (event) => {
                changeColour(event)
            })
        }
    }
}

function changeColour(e) {
    e.currentTarget.classList.add("cell-hover")
}

function changeGridSize(newSize) {
    createGrid(newSize);
}

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonId = button.getAttribute("id");
        switch (buttonId) {
            case "change-size":
                const newSize = Number(prompt("Enter size of grid"));
                changeGridSize(newSize);
                break;
        }
    })
})
