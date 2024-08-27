const container = document.querySelector("#container");
const button = document.querySelector("#grid-btn");
button.addEventListener("click", getGrid);
let erasing = false;

function createGrid(rows, columns) {
  for (let i = 0; i < rows; i++) {
    let gridRow = document.createElement("div");
    for (let k = 0; k < columns; k++) {
      let gridElement = document.createElement("div");
      gridElement.style.backgroundColor = "white";
      gridElement.style.border = "1px solid black";
      gridElement.style.opacity = "10%";
      gridElement.addEventListener("mouseover", () => {
        changeColor(erasing, gridElement)});
      gridRow.appendChild(gridElement);
    }
    gridRow.setAttribute("class", "row");
    container.appendChild(gridRow);
  }
}

function changeColor(erasing, gridElement){
  if (erasing) {
    gridElement.style.backgroundColor = "white";
  }
  else {
    gridElement.style.backgroundColor = getRandomColor();
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getGrid() {
  container.innerHTML = "";
  let numSquares = prompt("How many squares would you like in your grid?");
  while (numSquares > 100) {
    alert("please choose a number below 100");
    numSquares = prompt("How many squares would you like in your grid?");
  }
  createGrid(numSquares, numSquares);
}
