function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const form = document.querySelector('#controls');
const input = form.firstElementChild;
const addButton = form.querySelector('[data-create]');
const delButton = form.querySelector('[data-destroy]');
const newBoxes = document.querySelector('#boxes');
const widthBox = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement("div");
    element.style.width =  `${widthBox + (i*10)}px`;
    element.style.height = `${widthBox + (i*10)}px`;
    element.style.backgroundColor = getRandomHexColor();
    newBoxes.append(element);
  };
};

function creatingСollection (event) {
 const quantityElements =  event.currentTarget.value;
  addButton.addEventListener('click', () => {
    createBoxes(quantityElements)
  });
};

function removeCollection () {
  const divArray = newBoxes.querySelectorAll('div');
  divArray.forEach(element => {
    element.remove();
  });
};

input.addEventListener("change", creatingСollection);
delButton.addEventListener('click', removeCollection);