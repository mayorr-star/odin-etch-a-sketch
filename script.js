const grid = document.querySelector(".grid");
const buttonBox = document.querySelector(".button-box");
const buttons = document.querySelectorAll(".extra");
let randomMode = false;

window.addEventListener("DOMContentLoaded", createGrid(16));

function createGrid(size) {
  grid.innerHTML = "";
  for (let rows = 0; rows < size; rows++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let columns = 0; columns < size; columns++) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      row.appendChild(cell);
      grid.appendChild(row);
      cell.addEventListener("mouseover", (event) => {
        changeColour(event, "#000000");
        if (randomMode) {
            changeColour(event, randomize())
        }
      });
    }
  }
}
function changeColour(e, colour) {
    e.currentTarget.classList.add("cell-hover");
    e.currentTarget.style.backgroundColor = colour;
}

function changeGridSize(newSize) {
  if (newSize > 100) {
    alert("Enter a number less than 100");
  } else {
    createGrid(newSize);
  }
}
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonId = button.getAttribute("id");
    switch (buttonId) {
      case "change-size":
        const newSize = Number(prompt("Enter size of grid"));
        changeGridSize(newSize);
        break;

      case "random-btn":
        randomMode = true;
    }
  });
});

function randomize() {
    const hexValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let randomColour = "#";
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * hexValues.length);
        randomColour += hexValues[randomNumber];
    }
    return randomColour;
}
