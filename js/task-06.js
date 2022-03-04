const inputSymbols = document.querySelector("#validation-input");

inputSymbols.addEventListener("blur", onBlur);

function onBlur (event) {

  event.currentTarget.value.length === Number(inputSymbols.dataset.length)
    ? event.currentTarget.classList = ("valid")
    : event.currentTarget.classList = ("invalid");
  
};
