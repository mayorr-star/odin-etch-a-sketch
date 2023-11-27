const grid = document.querySelector(".grid-container");

function createGrid() {
    for (let i = 0; i < 16 * 16; i++) {
            const squareDiv = document.createElement("div");
            squareDiv.setAttribute("class", "square-div");
            grid.appendChild(squareDiv);
            squareDiv.addEventListener("click", (e) => displayColour(e))
    }
}
createGrid()

function displayColour(e) {
    e.currentTarget.classList.add("hover-me")
}