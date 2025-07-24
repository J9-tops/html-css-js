const adjustCellSlider = document.querySelector("#adjust-cell-numbers");
const colorInput1 = document.querySelector("#color-input1");
const colorInput2 = document.querySelector("#color-input2");
const arrow = document.querySelector("#arrow");
const sketchBoard = document.querySelector(".sketchboard");
const counter = document.querySelector(".counter");
const eraser = document.querySelector("#eraser");
const solidFill = document.querySelector("#solid-fill");
const blend = document.querySelector("#blend");
const turnGridOff = document.querySelector(".turn-grid-on-off");
turnGridOff.setAttribute("data-value", "on");
let solidFillClicked = false;
let eraseClicked = false;
let blendClicked = false;
const refreshCanvas = document.querySelector(".refresh-canvas");

function colorCell(cell) {
  if (cell.style.backgroundColor === "") {
    cell.style.backgroundColor = colorInput1.value;
  }
}

function turnGridOnFunc(cell) {
  cell.style.borderTop = "solid 1px black";
  cell.style.borderLeft = "solid 1px black";
  cell.style.borderRight = "solid 1px black";
}

function turnGridOffFunc(cell) {
  cell.style.borderTop = "none";
  cell.style.borderLeft = "none";
  cell.style.borderRight = "none";
}

function createCells(number) {
  let num = number - 1;
  for (let i = 0; i <= num; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    sketchBoard.append(row);
    row.style.height = 400 / number + "px";
    for (let j = 0; j <= num; j++) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "sketch");
      row.append(cell);
      cell.style.height = 400 / number + "px";
      cell.style.width = 400 / number + "px";
    }
  }
}

adjustCellSlider.oninput = () => {
  let value = adjustCellSlider.value;
  counter.textContent = `${value} x ${value}`;
  sketchBoard.replaceChildren();
  createCells(value);
};

function solidFillFunc() {
  colorInput2.style.display = "none";
  arrow.style.display = "none";
  const select = document.querySelectorAll(".sketch");
  select.forEach((cell) => {
    cell.addEventListener("mouseover", function () {
      colorCell(cell);
    });
  });
}

function blendFunc() {
  colorInput2.style.display = "block";
  arrow.style.display = "block";
  const select = document.querySelectorAll(".sketch");
  select.forEach((cell) => {
    cell.addEventListener("mouseover", function () {
      if (cell.style.backgroundColor == "") {
        console.log("i worked");
        cell.style.backgroundColor = colorInput1.value;
      } else {
        cell.style.backgroundColor = colorInput2.value;
      }
    });
  });
}

function eraserFunc() {
  const select = document.querySelectorAll(".sketch");
  select.forEach((cell) => {
    cell.addEventListener("mouseover", function () {
      cell.style.backgroundColor = "";
    });
  });
}

solidFill.addEventListener("click", function () {
  solidFillClicked = true;

  if (blendClicked || eraseClicked) {
    blend.removeEventListener("click", blendFunc);
    eraser.removeEventListener("click", eraserFunc);
    blendClicked = false;
    eraseClicked = false;
    solidFillFunc();
  }
  if (!blendClicked && !eraseClicked) {
    solidFillFunc();
  }
});

eraser.addEventListener("click", function () {
  eraseClicked = true;

  if (blendClicked || solidFillClicked) {
    blend.removeEventListener("click", blendFunc);
    eraser.removeEventListener("click", solidFillFunc);
    blendClicked = false;
    solidFillClicked = false;
    eraserFunc();
  }
  if (!blendClicked && !solidFillClicked) {
    eraserFunc();
  }
});

blend.addEventListener("click", function () {
  blendClicked = true;
  if (solidFillClicked) {
    solidFill.removeEventListener("click", solidFillFunc);
    eraser.removeEventListener("click", eraserFunc);
    solidFillClicked = false;
    eraseClicked = false;
    blendFunc();
  }
});

function grids() {
  let cell = document.querySelectorAll(".sketch");
  let attri = turnGridOff.getAttribute("data-value");
  if (attri == "on") {
    cell.forEach((cell) => {
      turnGridOffFunc(cell);
    });
    turnGridOff.setAttribute("data-value", "off");
  }
  if (attri == "off") {
    cell.forEach((cell) => {
      turnGridOnFunc(cell);
    });
    turnGridOff.setAttribute("data-value", "on");
  }
}

turnGridOff.addEventListener("click", function () {
  grids();
});

function refreshCanvasFunc() {
  sketchBoard.replaceChildren();
}

refreshCanvas.addEventListener("click", function () {
  refreshCanvasFunc();
  adjustCellSlider.value = "2";
});
