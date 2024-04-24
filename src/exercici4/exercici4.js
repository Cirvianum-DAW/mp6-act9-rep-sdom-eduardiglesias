const app = document.getElementById('list-app');

const list = document.createElement('ul');
app.appendChild(list);

const input = document.createElement('input');
input.type = 'text';

const addButton = document.createElement('button');
addButton.innerHTML = 'Afegir element';
app.append(input, addButton);

addButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.innerHTML = input.value;
    list.appendChild(newItem);
    input.value = '';
})

list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI'){
        const text = prompt('Escriu el nou text');
        event.target.innerHTML = text;
    }
})