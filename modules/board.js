class Board {
    constructor () {
    }

    changeColorNumber (number, element) {
      /* Logic */
    }

    reset (document) {
      /* Logic   */
    }

    drawLetters () {
      let letters = ['B', 'I', 'N', 'G', 'O'];
      let lettersContainer = document.getElementById('letters');
      lettersContainer.style.display = 'flex';
      lettersContainer.style.flexDirection = 'column';

      let i = 0;
      while (i < letters.length) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        tr.style.width = 'min-content';
        td.style.color = '#E85D04';
        td.style.fontSize = '30px';
        td.style.padding = '10px';
        td.textContent = letters[i];
        tr.append(td);
        lettersContainer.append(tr);
        i = i + 1;
      }
    }

    drawBoard () {
      let numbersContainer = document.getElementById('numbers');
      let i = 1;
      let tr = document.createElement('tr');
      while (i <= 75) {
        let td = document.createElement('td');
        td.className = 'number';
        td.style.width = 'min-content';
        td.style.color = '#FFBA08';
        td.style.fontSize = '30px';
        td.style.padding = '10px';
        td.textContent = i;
        tr.append(td);
        // Si ya se lleno una fila entonces los nuevos td
        // agregamos a una nueva fila
        if (i === 15 || i === 30 || i === 45
            || i === 60 || i === 75) {
          numbersContainer.append(tr);
          tr = document.createElement('tr');
        }
        i = i + 1;
      }
    }
}

export { Board };
