class SignBoard {
    constructor () {
      this.signBoard = document.getElementById('sign-board');
    }

    setResult (number) {
      let letter = (number >= 1 && number <= 15) ? 'B' :
                   (number >= 16 && number <= 30) ? 'I' :
                   (number >= 31 && number <= 45) ? 'N' :
                   (number >= 46 && number <= 60) ? 'G' : 'O';
      this.signBoard.textContent = `${letter} ${number}`;
    }

    reset () {
      this.signBoard.textContent = 'A 00';
    }
}

export { SignBoard };
