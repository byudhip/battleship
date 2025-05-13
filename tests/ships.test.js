import { Carrier } from '../src/ships.js';

describe('Testing the methods on one of the ships', () => {
  let carrier1;
  beforeAll(() => {
    carrier1 = new Carrier();
  });

  test('Check if hit method is working', () => {
    carrier1.hit();
    expect(carrier1.hits).toBe(1);
  });
});
