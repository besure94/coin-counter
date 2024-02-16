import coinCounter from './../src/js/coinCounter.js';

describe('Coin counter function', () => {

  test('Should return an inputted number', () => {
    const amount = 1;
    expect(coinCounter(amount)).toEqual(1);
  });

  test('Should return an error for a non-numeric input', () => {
    const amount = "number";
    expect(() => coinCounter(amount)).toThrow("Invalid amount. Please enter a positive number");
  });
});