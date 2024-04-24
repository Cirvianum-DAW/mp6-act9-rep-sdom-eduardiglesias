let languages = [
  {
    name: 'JavaScript',
    releaseDate: 1995,
    fileExtension: '.js',
    creator: 'Brendan Eich',
  },
  {
    name: 'Java',
    releaseDate: 1995,
    fileExtension: '.java',
    creator: 'James Gosling',
  },
  {
    name: 'PHP',
    releaseDate: 1995,
    fileExtension: '.php',
    creator: 'Rasmus Lerdorf',
  },
  {
    name: 'C++',
    releaseDate: 1985,
    fileExtension: '.cpp',
    creator: 'Bjarne Stroustrup',
  },
];

function tableCreator(dataArray, targetElement) {
  const table = document.createElement('table');

  const theadElement = document.createElement('thead');
  table.appendChild(theadElement);

  const trElement = document.createElement('tr');
  for (const key in dataArray[0]) {
    const thElement = document.createElement('th');
    thElement.innerHTML = key;
    trElement.appendChild(thElement);
  }

  theadElement.appendChild(trElement);

  const tbodyElement = document.createElement('tbody');
  table.appendChild(tbodyElement);

  for (const element of dataArray) {
    const trElement2 = document.createElement('tr');
    for (key in element) {
      const tdElement = document.createElement('td');
      tdElement.innerHTML = element[key];
      trElement2.appendChild(tdElement);
    }
    tbodyElement.appendChild(trElement2);
  }

  targetElement.appendChild(table);
}

tableCreator(languages, document.getElementById('table-container'));
