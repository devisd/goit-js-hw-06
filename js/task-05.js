const inputName = document.querySelector('#name-input');
const nameUser = document.querySelector('#name-output');

inputName.addEventListener("input", event => {
        
        nameUser.textContent = event.currentTarget.value === '' ? 
         'Anonymous' :
        nameUser.textContent = event.currentTarget.value;
});