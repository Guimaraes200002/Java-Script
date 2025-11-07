const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputValue = document.getElementById("valor").value; // Captura o valor digitado pelo usuário
    const currencyToConvert = document.getElementById("valor-a-converter"); // Captura a moeda selecionada pelo usuário
    const convertedCurrency = document.getElementById("valor-convertido"); // Captura a moeda para a qual o usuário quer converter

    if (currencySelect.value === "USD") {

        const dolarToday = 5.2; // Valor fictício do dólar para conversão

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputValue / dolarToday); // modifica o valor convertido e formata o valor em Dólar Americano
    }

    if (currencySelect.value === "EUR") {

        const euroToday = 5.9; // Valor fictício do euro para conversão

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputValue / euroToday); // modifica o valor convertido e formata o valor em Euro
    }
    if (currencySelect.value === "GBP") {

        const libraToday = 6.9; // Valor fictício da libra para conversão

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputValue / libraToday); // modifica o valor convertido e formata o valor em Libra Esterlina
    }

    if (currencySelect.value === "BTC") {

        const bitcoinToday = 117000; // Valor fictício do bitcoin para conversão

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputValue / bitcoinToday); // modifica o valor convertido e formata o valor em Bitcoin
    }

    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputValue);  // modifica o valor a ser convertido e formata o valor em Real Brasileiro
}

convertButton.addEventListener("click", convertValues)