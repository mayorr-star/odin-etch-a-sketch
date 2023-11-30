const grid = document.querySelector(".grid");
const gridcontainer = document.querySelector(".grid-container");

window.addEventListener("DOMContentLoaded", createGrid(16));

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
            const squareDiv = document.createElement("div");
            squareDiv.setAttribute("class", "square-div");
            grid.appendChild(squareDiv);
            squareDiv.addEventListener("mouseover", (e) => displayColour(e))
    }
}

function displayColour(e) {
    e.currentTarget.classList.add("hover-me");
}

function createButton() {
    const button = document.createElement("button");
    button.setAttribute("class", "size-button")
    const buttonTextNode = document.createTextNode("Change size");
    button.appendChild(buttonTextNode)
    gridcontainer.insertBefore(button, grid)

    button.addEventListener("click", () => {
        const newSize = Number(prompt("Enter new size"));
        grid.innerHTML = "";
        createGrid(newSize)
    })
}
createButton()

