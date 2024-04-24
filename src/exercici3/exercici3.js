// const llistes = document.querySelectorAll('ul');

// function canviarText(llistes, index) {
//     if (index < llistes.length) {
//         const elements = llistes[index].querySelectorAll('li');
//         elements[0].textContent = 'primer';
//         elements[elements.length - 1].textContent = 'últim';
//         canviarText(llistes, index + 1);
//     }
// }

// canviarText(llistes, 0);

const firstElementList = document.querySelectorAll('li:first-child');
const lastElementList = document.querySelectorAll('li:last-child');

firstElementList.forEach((li) => (li.textContent = 'primer'));
lastElementList.forEach((li) => (li.textContent = 'últim'));