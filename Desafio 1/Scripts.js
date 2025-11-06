const convertButton = document.querySelector(".convert-button");

function convertValues() {
    const inputValue = document.getElementById("valor").value;
    const currencyValueTo = document.getElementById("currency-value-to");
    const currencyValueFrom = document.getElementById("currency-value-from");
}

convertButton.addEventListener("click", convertValues)