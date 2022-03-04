const inputSymbols = document.querySelector("#validation-input");
const inputSymbolsLength = Number(inputSymbols.dataset.length);

inputSymbols.addEventListener("blur", event => {
       
  event.currentTarget.value.length === inputSymbolsLength
    ? inputSymbols.classList.add("valid")
    : inputSymbols.classList.add("invalid");
  
});
