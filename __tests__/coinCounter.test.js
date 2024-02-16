import coinCounter from './../src/js/coinCounter.js';

describe('Coin counter function', () => {

  test('Should return an error for a non-numeric input', () => {
    const amount = "number";
    expect(() => coinCounter(amount)).toThrow("Invalid amount. Please enter a positive number.");
  });

  test('Should return an error for a negative amount', () => {
    const amount = -1;
    expect(() => coinCounter(amount)).toThrow("Invalid amount. Please enter a positive number.");
  });

  test('Should return an error for an amount of 0.', () => {
    const amount = 0;
    expect(() => coinCounter(amount)).toThrow("Invalid amount. Please enter a positive number.");
  });

  test('Should return true for a number with two decimal places', () => {
    const amount = 1.25;
    expect(coinCounter(amount)).toBe(true);
  });

  test('Should return false for a number with more than two decimal places', () => {
    const amount = 1.255;
    expect(coinCounter(amount)).toBe(false);
  });

  test('Should return an error for an empty amount.', () => {
    const amount = null;
    expect(() => coinCounter(amount)).toThrow("Invalid amount. Please enter a positive number.");
  });

  test('Should return true for a whole positive number.', () => {
    const amount = 5;
    expect(coinCounter(amount)).toBe(true);
  })
});