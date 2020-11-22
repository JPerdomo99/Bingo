class StackBalota {
  constructor() {
    this.balotas = [];
    this.top = -1;
  }

  push (number) {
    this.balotas[this.increaseTop()] = number;
  }

  increaseTop () {
    this.top = this.top + 1;
    return this.top;
  }

  reset () {
    this.balotas = [];
    this.top = -1;
  }
}

export { StackBalota };
