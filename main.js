import { Board } from './modules/board.js';
import { LinkedListBalota } from './modules/linkedListBalota.js';
import { StackBalota } from './modules/stackBalota.js'
import { SignBoard } from './modules/signBoard.js'

class Main {
    constructor (board, linkedListBalota, stackBalota, signBoard) {
      this.board = board;
      this.linkedListBalota = linkedListBalota;
      this.stackBalota = stackBalota;
      this.signBoard = signBoard;
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
      this.linkedListBalota.list();
    }

    newBalota () {
      let randomNumber = this.generateNumber();

    }

    generateNumber () {
      return Math.floor(Math.random() * (this.MAX - this.MIN) + this.MIN);
    }
}

let board = new Board();
let linkedListBalota = new LinkedListBalota();
let stackBalota = new StackBalota();
let signBoard = new SignBoard();
let main = new Main(board, linkedListBalota, stackBalota, signBoard);

document.getElementById('new').addEventListener('click', () => {
  main.newBalota();
});
