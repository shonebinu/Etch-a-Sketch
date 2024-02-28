"use strict"

window.onload = drawGrid(16);

let squareColor = "black";

const gridSizeInput = document.querySelector("#grid-size-input");
const colorInput = document.querySelector("[type='color']");
const clearButton = document.querySelector("#clear");
const eraseButton = document.querySelector("#erase");

gridSizeInput.addEventListener("change", () => {
  const gridSize = gridSizeInput.value;
  if (gridSize > 100) {
    window.alert("Enter a grid size below 100");
  }
  drawGrid(gridSize);
});

colorInput.addEventListener("change", () => {
  squareColor = colorInput.value;
});

clearButton.addEventListener("click", () => {
  clearGrid(); 
});

function drawGrid(gridSize) {
  const gridContainer = document.querySelector("#grid-container");
  gridContainer.innerHTML = "";
  
  for (let i = 0; i < gridSize; i++) {
    let rowGrid = document.createElement("div");
    rowGrid.classList.add("row");
  
    for (let j = 0; j < gridSize; j++) {
      let square = document.createElement("div"); 

      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = document.querySelector("#rainbow").checked 
          ? generateRandomColor() 
          : squareColor;
      });

      square.classList.add("grid-square");
      rowGrid.appendChild(square);
    }
    gridContainer.appendChild(rowGrid);
  }
}

function clearGrid() {
  const gridContainer = document.querySelector("#grid-container");
  gridContainer.childNodes.forEach((row) => {
    row.childNodes.forEach((square) => {
      square.style.backgroundColor = "";
    });
  });
}

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
