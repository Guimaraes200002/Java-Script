const list = document.querySelector('ul');
const showAllButton = document.querySelector('.showAll');
const mapAllButton = document.querySelector('.mapAll');
const reduceAllButton = document.querySelector('.reduceAll');
const filterAllButton = document.querySelector('.filterAll');

//Função para mostrar os itens de um array na tela
function showAll(array) {
    let myLi = '';

    array.forEach((Product) => {
        myLi += `
    <li> 
        <img src=${Product.src}>
        <p>${Product.name}</p>
        <p>R$ ${Product.price}</p>
    </li>`;
    });
    list.innerHTML = myLi;
}
//Função para mapear os itens do array e aplicar um desconto de 10%
function mapAll() {

    const mappedMenu = menuOptions.map((product) => ({
      ...product,                 //"Spread operator" para copiar as propriedades do objeto original
      price: product.price * 0.9 // aplica 10% de desconto
    }));

   showAll(mappedMenu);
}

function reduceAll() {
    const totalPrice = menuOptions.reduce((accumulator, product) => {
        return accumulator + product.price}, 0);
    
    list.innerHTML = `
    <li>
        <p>Preço Total do Menu:</p>
        <p>R$ ${totalPrice}</p>
    </li>`;
}

function filterAll() {
    const filteredMenu = menuOptions.filter((product) => {
        return product.vegan === true;
    });
    showAll(filteredMenu);
}
showAllButton.addEventListener('click', () => showAll(menuOptions)); 
mapAllButton.addEventListener('click', mapAll);
reduceAllButton.addEventListener('click', reduceAll);
filterAllButton.addEventListener('click', filterAll);
