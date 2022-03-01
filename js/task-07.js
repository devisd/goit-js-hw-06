const textSizeControl = document.querySelector('#font-size-control');
const textToChange = document.querySelector('#text');

textSizeControl.addEventListener("input", event => {
       
    textToChange.style.fontSize = `${event.currentTarget.value}px`;
});