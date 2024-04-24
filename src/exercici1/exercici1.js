// JS
const fruitList = ['poma', 'plàtan', 'tomàquet'];

const fruitListElement = document.getElementById('llistaFruites');

fruitList.forEach((fruita) => {
    const fruitaElement = document.createElement('li');
    fruitaElement.textContent = fruita;
    fruitListElement.appendChild(fruitaElement);
})

// const ulElement = document.querySelector('ul');

// fruitList.forEach((fruit) => {
//     const liElement = document.createElement('li');

//     liElement.textContent = fruit;

//     ulElement.appendChild(liElement);

// })




