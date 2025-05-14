const { Carrier } = require('../src/ships.js');

describe('Testing the methods on one of the ships', () => {
  let carrier1;
  beforeAll(() => {
    carrier1 = new Carrier();
  });

  test('Check if hit method is working', () => {
    carrier1.hit();
    expect(carrier1.getHits()).toBe(1);
  });
  test('Check if sunk method is working when enough hits taken by ship', () => {
    carrier1.hit();
    carrier1.hit();
    carrier1.hit();
    carrier1.hit();
    expect(carrier1.isSunk()).toBe(true);
  });
});
