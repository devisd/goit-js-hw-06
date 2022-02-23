const inputSymbols = document.querySelector('validation-input');

inputSymbols.addEventListener("keydown", event => {
        
        event.currentTarget.value === '' ? 
        nameUser.textContent = 'Anonymous' :
        nameUser.textContent = event.currentTarget.value;
});