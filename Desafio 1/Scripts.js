const convertButton = document.querySelector(".convert-button"); // Variável do botão de conversão.
const currencySelect = document.querySelector(".currency-select"); // Variável do select de moedas convertidas.
const currencyFrom = document.getElementById("currency-from"); // Variável do select de moedas que será convertido.

const realToday = 1; // Valor fictício do real para conversão
const dolarToday = 5.2; // Valor fictício do dólar para conversão
const euroToday = 5.9; // Valor fictício do euro para conversão
const libraToday = 6.9; // Valor fictício da libra para conversão
const bitcoinToday = 117000; // Valor fictício do bitcoin para conversão
const currencyToday = realToday; // Variável que armazenará o valor da moeda selecionada para conversão

function convertValues() {
    const currencyToConvert = document.getElementById("valor-a-converter"); // Captura a moeda selecionada pelo usuário

    if (currencyToConvert.value === "BRL") {

        currencyToday = realToday

        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        }).format(inputValue);  // modifica o valor a ser convertido e formata o valor em Real Brasileiro
    }

    if (currencyToConvert.value === "USD") {

        currencyToday = dolarToday

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputValue); // modifica o valor a ser convertido e formata o valor em Dólar Americano
    }   

    if (currencyToConvert.value === "EUR") {

        currencyToday = euroToday

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputValue); // modifica o valor a ser convertido e formata o valor em Euro
    }   

    if (currencyToConvert.value === "GBP") {

        currencyToday = libraToday

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputValue); // modifica o valor a ser convertido e formata o valor em Libra Esterlina
    }

    if (currencyToConvert.value === "BTC") {

        currencyToday = bitcoinToday

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputValue); // modifica o valor a ser convertido e formata o valor em Bitcoin
    }

}

function convertValues() {
    const inputValue = document.getElementById("valor").value; // Captura o valor digitado pelo usuário
    const convertedCurrency = document.getElementById("valor-convertido"); // Captura a moeda para a qual o usuário quer converter

    if (currencySelect.value === "BRL") {
        
        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        }).format(inputValue * (currencyToday / realToday));  // modifica o valor a ser convertido e formata o valor em Real Brasileiro
    }

    if (currencySelect.value === "USD") {

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputValue * (currencyToday / dolarToday)); // modifica o valor convertido e formata o valor em Dólar Americano
    }

    if (currencySelect.value === "EUR") {

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputValue *( currencyToday / euroToday)); // modifica o valor convertido e formata o valor em Euro
    }

    if (currencySelect.value === "GBP") {

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputValue * (currencyToday / libraToday)); // modifica o valor convertido e formata o valor em Libra Esterlina
    }

    if (currencySelect.value === "BTC") {

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputValue * (currencyToday / bitcoinToday)); // modifica o valor convertido e formata o valor em Bitcoin
    }

}

function change() {
    const convertedName = document.getElementById("converted-name"); //Variavel do nome da moeda convertida
    const convertedImg = document.getElementById("converted-img");   //Variavel do logo da moeda convertida

    if (currencySelect.value === "USD") {
        convertedName.innerHTML = "Dólar";
        convertedImg.src = "./assets/estados-unidos (1) 1.png";
    }

    if (currencySelect.value === "EUR") {
        convertedName.innerHTML = "Euro";
        convertedImg.src = "./Assets/Euro.png";
    }

    if (currencySelect.value === "GBP") {
        convertedName.innerHTML = "Libra Esterlina";
        convertedImg.src = "./Assets/libra 1.png";
    }

    if (currencySelect.value === "BTC") {
        convertedName.innerHTML = "Bitcoin";
        convertedImg.src = "./Assets/bitcoin 1.png";
    }

    convertValues();

}
convertButton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", change);