import { Balota } from './balota.js';

class LinkedListBalota {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add (number) {
    let balota = new Balota(number);
    if (this.head === null) {
        this.head = balota;
        this.increaseSize();
        return;
    }
    let tempBalota = this.head;
    while(tempBalota.next !== null) {
      tempBalota = tempBalota.next;
    }
    tempBalota.next = balota;
    this.increaseSize();
  }

  remove (number) {
    if (this.exists(number)) {
        let tempBalota = this.head;
        if (tempBalota.number === number) {
          this.head = tempBalota.next;
          this.decreaseSize();
          return tempBalota.number;
        }
        while (tempBalota.next !== null) {
          if (tempBalota.next.number === number) {
            let balotaResult = tempBalota.next.number;
            tempBalota.next = tempBalota.next.next;
            this.decreaseSize();
            return balotaResult;
          }
          tempBalota = tempBalota.next;
        }
    }
    return null;
  }

  removeLast () {
    let tempBalota = this.head;
    while (tempBalota.next.next !== null) {
      tempBalota = tempBalota.next;
    }
    let balotaResult = tempBalota.next.number;
    tempBalota.next = null;
    return balotaResult;
  }

  reset () {
    this.head = null;
    this.size = 0;
  }

  exists (number) {
    if (this.head !== null) {
      let tempBalota = this.head;
      while (tempBalota.next !== null) {
        if (tempBalota.number === number) return true;
        tempBalota = tempBalota.next;
      }
      //Validamos el ultimo elemento
      if (tempBalota.number === number) return true;
      return false;
    }
  }

  list () {
    if (this.head !== null) {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        console.log(tempNode.number);
        tempNode = tempNode.next;
      }
      console.log(tempNode.number);
    }
  }

  getSize () {
    return this.size;
  }

  increaseSize () {
    this.size = this.size + 1;
  }

  decreaseSize () {
    this.size = this.size - 1;
  }
}

export { LinkedListBalota };
