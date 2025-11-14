const convertButton = document.querySelector(".convert-button"); // Variável do botão de conversão.
const toCurrency = document.querySelector(".to-currency"); // Variável do select de moedas convertidas.
const fromCurrency = document.querySelector(".from-currency"); // Variável do select de moedas que será convertido.
const amount = document.getElementById("amount"); // Variável do input de valor a ser convertido.
const toConvertName = document.getElementById("to-convert-name"); // Variável do nome da moeda que será convertida.
const convertedName = document.getElementById("converted-name"); // Variável do nome da moeda convertida.
const toConvertImg = document.getElementById("to-convert-img"); // Variável da imagem da moeda que será convertida.
const convertedImg = document.getElementById("converted-img"); // Variável da imagem da moeda convertida.
const toConvertAmount = document.getElementById("to-convert-amount"); // Variável do valor da moeda que será convertida.
const convertedAmount = document.getElementById("converted-amount"); // Variável do valor da moeda convertida.

const API_URL = "https://api.exchangerate-api.com/v4/latest/"; // URL da API de câmbio.


async function convertValues() {

    try {

        const result = await fetch(API_URL + fromCurrency.value);
        const data = await result.json();
        const exchangeRate = data.rates[toCurrency.value];

        const convertedValue = (amount.value * exchangeRate).toFixed(2);

        toConvertAmount.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: fromCurrency.value,
        }).format(amount.value);

        convertedAmount.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: toCurrency.value,
        }).format(convertedValue);

        console.log(data);
        
    } catch (error) {
        alert("Erro ao converter valores. Por favor, tente novamente.");
    }
}

    function change() {
        
        if (toCurrency.value === "BRL") {
            convertedName.innerHTML = "Real Brasileiro";
            convertedImg.src = "./Assets/brasil 2.png";
        }

        if (toCurrency.value === "USD") {
            convertedName.innerHTML = "Dólar Americano";
            convertedImg.src = "./Assets/estados-unidos (1) 1.png";
        }

        if (toCurrency.value === "EUR") {
            convertedName.innerHTML = "Euro";
            convertedImg.src = "./Assets/Euro.png";
        }

        if (toCurrency.value === "GBP") {
            convertedName.innerHTML = "Libra Esterlina";
            convertedImg.src = "./Assets/libra 1.png";
        }

        convertValues();

    }

function changeCurrency() {

    if (fromCurrency.value === "BRL") {
        toConvertName.innerHTML = "Real Brasileiro";
        toConvertImg.src = "./Assets/brasil 2.png";
    }  

    if (fromCurrency.value === "USD") {
        toConvertName.innerHTML = "Dólar Americano";
        toConvertImg.src = "./Assets/estados-unidos (1) 1.png";
    }

    if (fromCurrency.value === "EUR") {
        toConvertName.innerHTML = "Euro";
        toConvertImg.src = "./Assets/Euro.png";
    }

    if (fromCurrency.value === "GBP") {
        toConvertName.innerHTML = "Libra Esterlina";
        toConvertImg.src = "./Assets/libra 1.png";
    }

    convertValues();

}
convertButton.addEventListener("click", convertValues);
toCurrency.addEventListener("change", change);
fromCurrency.addEventListener("change", changeCurrency);