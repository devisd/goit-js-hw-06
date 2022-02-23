const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valuePoint = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    valuePoint.textContent = counterValue - 1;
});
incrementBtn.addEventListener('click', () => {
    valuePoint.textContent = counterValue + 1;
});