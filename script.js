const container = document.querySelector("#container");

function createGrid(rows, columns) {
  for (let i = 0; i < rows; i++) {
    const gridRow = document.createElement("div");
    for (let k = 0; k < columns; k++) {
      let gridElement = document.createElement("div");
      gridRow.appendChild(gridElement);
    }
    container.appendChild(gridRow);
  }
}

createGrid(16, 16);
