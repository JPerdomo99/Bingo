import { Board } from './modules/board.js';
import { LinkedListBalota } from './modules/linkedListBalota.js';
import { StackBalota } from './modules/stackBalota.js'
import { SignBoard } from './modules/signBoard.js'

class Main {
    constructor (board, linkedListBalota, stackBalota, signBoard, gameOver) {
      this.board = board;
      this.linkedListBalota = linkedListBalota;
      this.stackBalota = stackBalota;
      this.signBoard = signBoard;
      this.gameOver = gameOver;
      this.board.drawLetters();
      this.board.drawBoard();
      this.MIN = 1;
      this.MAX = 76;
      this.setLinkedListBalota();
    }

    setLinkedListBalota () {
      let i = 1;
      while (i < 76) {
        this.linkedListBalota.add(i);
        i = i + 1;
      }
    }

    newBalota () {
      let button = document.getElementById('new');
      button.disabled = true;
      if (this.linkedListBalota.getSize() > 0) {
        let randomNumber = this.generateNumber();
        // Si es la primera vez que vamos a eliminar un nodo de la lista enlazada
        // Entonces sacamos con el primer numero aleatorio que nos ofrezca
        // El metodo generateNumber()
        if (this.linkedListBalota.getSize() < 75) {
          while (this.linkedListBalota.exists(randomNumber) === false) {
            randomNumber = this.generateNumber();
          }
        }
        this.stackBalota.push(this.linkedListBalota.remove(randomNumber));
        this.board.markNumber(randomNumber);
        this.signBoard.setResult(randomNumber);
        (this.linkedListBalota.getSize() === 0) ? this.gameOver.play() : null;
      } else {
        console.log('La lista enlazada no tiene mas balotas (nodos)');
      }
      button.disabled = false;
    }

    reset () {
      this.linkedListBalota.reset();
      this.stackBalota.reset();
      this.setLinkedListBalota();
      this.signBoard.reset();
      this.board.reset();
    }

    generateNumber () {
      return Math.floor(Math.random() * (this.MAX - this.MIN) + this.MIN);
    }
}

let audio = new Audio('./assets/sound.mp3');
let gameOver = new Audio('./assets/gameover.mp3');
let board = new Board(audio);
let linkedListBalota = new LinkedListBalota();
let stackBalota = new StackBalota();
let signBoard = new SignBoard();
let main = new Main(board, linkedListBalota, stackBalota, signBoard, gameOver);

document.getElementById('new').addEventListener('click', () => {
  main.newBalota();
});

document.getElementById('reset').addEventListener('click', () => {
  main.reset();
})
