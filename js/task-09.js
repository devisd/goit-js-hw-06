function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const changeColorText = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
  
  changeColorText.textContent = getRandomHexColor();
  bodyColor.style.backgroundColor = getRandomHexColor();
  
});