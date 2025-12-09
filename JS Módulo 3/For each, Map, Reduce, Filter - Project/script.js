const list = document.querySelector('ul');
const showAllButton = document.querySelector('.showAll');
let myLi='';

function showAll() {
    menuOptions.forEach((Product)=> {

        myLi+= myLi + `
        <li>
            <img src=${Product.src}>
            <p>${Product.name}</p>
            <p>R$ ${Product.price}</p>
        </li>`;


        list.innerHTML = myLi;

    });
}

showAllButton.addEventListener('click', showAll);