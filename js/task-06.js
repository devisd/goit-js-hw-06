const inputSymbols = document.querySelector("#validation-input");

inputSymbols.addEventListener("blur", onBlur);

function onBlur (event) {

  if (event.currentTarget.value.length === Number(inputSymbols.dataset.length)) {
    event.currentTarget.classList = ("valid");
  } else {
    event.currentTarget.classList = ("invalid");
  }
};
