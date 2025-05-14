class Carrier {
  constructor() {
    this.ship = 'Carrier';
  }

  #size = 5;
  #hits = 0;

  hit() {
    return this.#hits++;
  }

  getHits() {
    return this.#hits;
  }

  getSize() {
    return this.#size;
  }

  isSunk() {
    return this.#hits === this.#size ? true : false;
  }
}

class Battleship {
  constructor() {
    this.ship = 'Battleship';
  }

  #size = 4;
  #hits = 0;

  hit() {
    return this.#hits++;
  }

  getHits() {
    return this.#hits;
  }

  getSize() {
    return this.#size;
  }

  isSunk() {
    return this.#hits === this.#size ? true : false;
  }
}

class Destroyer {
  constructor() {
    this.ship = 'Destroyer';
  }

  #size = 3;
  #hits = 0;

  hit() {
    return this.#hits++;
  }

  getHits() {
    return this.#hits;
  }

  getSize() {
    return this.#size;
  }

  isSunk() {
    return this.#hits === this.#size ? true : false;
  }
}

class Submarine {
  constructor() {
    this.ship = 'Submarine';
  }
  #size = 3;
  #hits = 0;

  hit() {
    return this.#hits++;
  }

  getHits() {
    return this.#hits;
  }

  getSize() {
    return this.#size;
  }

  getHits() {
    return this.#hits;
  }

  isSunk() {
    return this.#hits === this.#size ? true : false;
  }
}

class PatrolBoat {
  constructor() {
    this.ship = 'Patrol Boat';
  }

  #size = 2;
  #hits = 0;

  hit() {
    return this.#hits++;
  }

  getSize() {
    return this.#size;
  }

  getHits() {
    return this.#hits;
  }

  isSunk() {
    return this.#hits === this.#size ? true : false;
  }
}

module.exports = { Carrier, Battleship, Destroyer, Submarine, PatrolBoat };
