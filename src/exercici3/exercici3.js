// Obtenir tots els elements de la llista no ordenada
let llistes = document.querySelectorAll('ul');

// Funció recursiva per canviar el text del primer i últim element de la llista
function canviarText(llistes, index) {
    if (index < llistes.length) {
        let elements = llistes[index].querySelectorAll('li');
        elements[0].textContent = 'primer';
        elements[elements.length - 1].textContent = 'últim';
        canviarText(llistes, index + 1);
    }
}

// Iniciar la funció recursiva
canviarText(llistes, 0);