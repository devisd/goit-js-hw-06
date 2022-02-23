const inputName = document.querySelector('#name-input');
const nameUser = document.querySelector('#name-output');

inputName.addEventListener("keydown", event => {
        
        event.currentTarget.value === '' ? 
        nameUser.textContent = 'Anonymous' :
        nameUser.textContent = event.currentTarget.value;
});