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
    }

    newBalota () {
      let randomNumber = this.generateNumber();
      if (this.linkedListBalota.getSize() < 75) {
        while (this.linkedListBalota.exists(randomNumber) === false) {
          randomNumber = this.generateNumber();
        }
      }
      console.log('random', randomNumber)
      this.stackBalota.push(this.linkedListBalota.remove(randomNumber));
      console.log('LinkedList');
      this.linkedListBalota.list();
      console.log('stack');
      this.stackBalota.list();
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
