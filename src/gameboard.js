const {
  Carrier,
  Battleship,
  Destroyer,
  Submarine,
  PatrolBoat,
} = require('./ships.js');

class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(''));
  }

  printBoard() {
    this.board.forEach((row) => console.log(JSON.stringify(row)));
  }

  placeHorizontally(ship, [row, col]) {
    if (
      row < 0 ||
      col < 0 ||
      row + ship.getSize() > 9 ||
      col + ship.getSize() > 9
    ) {
      // console.log(
      //   `[${x}, ${y}] is an invalid move, please choose another coordinate`
      // );
      return false;
    }
    for (let i = 0; i < ship.getSize(); i++) {
      if (this.board[row][col + i]) return false;
      this.board[row][col + i] = ship;
    }
    return true;
  }

  placeVertically(ship, [row, col]) {
    if (
      row < 0 ||
      col < 0 ||
      row + ship.getSize() > 9 ||
      col + ship.getSize() > 9
    ) {
      // console.log(
      //   `[${x}, ${y}] is an invalid move, please choose another coordinate`
      // );
      return false;
    }
    for (let i = 0; i < ship.getSize(); i++) {
      if (this.board[row][col + i]) return false;
      this.board[row + i][col] = ship;
    }
    return true;
  }
}
module.exports = Gameboard;
// const board = new Gameboard();
// const ship1 = new Carrier();
// const ship2 = new PatrolBoat();
// board.placeHorizontally(ship1, [0, 0]);
// board.placeHorizontally(ship2, [0, 0]);
// board.placeVertically(ship2, [9, 9]);
// board.placeVertically(ship2, [2, 4]);
// board.printBoard();
