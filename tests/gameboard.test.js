const { Carrier } = require('../src/ships.js');
const gameboard = require('../src/gameboard.js');

describe('Tests the gameboard methods', () => {
  let ship;
  let board;
  beforeEach(() => {
    ship = new Carrier();
    board = new gameboard();
  });

  test('Check if placeHorizontally method works', () => {
    board.placeHorizontally(ship, [0, 0]);
    expect(board.board[0].slice(0, 5)).toEqual([ship, ship, ship, ship, ship]);
  });

  test('Check if placeVertically method works', () => {
    expect(board.placeVertically(ship, [2, 4])).toBe(true);
    for (let i = 0; i < ship.getSize(); i++) {
      expect(board.board[2 + i][4]).toEqual(ship);
    }
  });

  test('Check if double placement prevention (horizontal) works', () => {
    board.placeHorizontally(ship, [0, 0]);
    expect(board.placeHorizontally(ship, [0, 0])).toBe(false);
  });

  test('Check if double placement prevention (vertical) works', () => {
    board.placeVertically(ship, [2, 4]);
    expect(board.placeVertically(ship, [2, 4])).toBe(false);
  });

  test('Check out of bounds move prevention', () => {
    expect(board.placeHorizontally(ship, [10, 10])).toBe(false);
  });

  test('Check out of bounds move prevention when the starting coordinate is valid', () => {
    expect(board.placeHorizontally(ship, [9, 9])).toBe(false);
  });
});
