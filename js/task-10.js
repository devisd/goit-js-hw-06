function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const addDivBtn = document.querySelector("[data-create]");
const delDivBtn = document.querySelector("[data-destroy]");
const boxWidth = 30;

let boxes = [];

function createBox() {
  for (let i = 0; i < inputEl.value; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxWidth + i * 10}px`;
    box.style.height = `${boxWidth + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
}

function appendBoxes() {
  boxesEl.append(...boxes);
}

function clearAll() {
  boxes = [];
  boxesEl.innerHTML = "";
}

addDivBtn.addEventListener("click", createBox);
addDivBtn.addEventListener("click", appendBoxes);
delDivBtn.addEventListener("click", clearAll);
