const minNumber = document.getElementById('min');
const maxNumber = document.getElementById('max');
const drawNumber = document.getElementById('draw-number');
const drawButton = document.getElementById('draw');
const resultDisplay = document.querySelector('.result');

function prizedraw() {
    const min = Math.ceil(Number(minNumber.value));
    const max = Math.floor(Number(maxNumber.value));
    const drawn = Math.floor(Math.random() * (max - min + 1)) + min;
    drawNumber.value = drawn;

}

function visibleResult() {

    if (minNumber.value === '' || maxNumber.value === '') {
        resultDisplay.style.display = 'none';
    } else {
        resultDisplay.style.display = 'block';
    }
}



drawButton.addEventListener('click', prizedraw);
minNumber.addEventListener('change', prizedraw);
maxNumber.addEventListener('change', prizedraw);
drawButton.addEventListener('click', visibleResult);
minNumber.addEventListener('change', visibleResult);
maxNumber.addEventListener('change', visibleResult);