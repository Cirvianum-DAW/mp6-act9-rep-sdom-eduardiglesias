// JS
const fruitList = ['poma', 'plàtan', 'tomàquet'];

const fruitListElement = document.getElementById('llistaFruites');

fruitList.forEach((fruita) => {
    const fruitaElement = document.createElement('li');
    fruitaElement.textContent = fruita;
    fruitListElement.appendChild(fruitaElement);
})

