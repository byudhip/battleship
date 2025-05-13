export class Carrier {
  constructor() {
    (this.size = 5), (this.hits = 0);
  }

  hit() {
    return this.hits++;
  }

  isSunk() {
    return this.hits === this.size ? true : false;
  }
}
