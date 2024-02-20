import coinCounter from './../src/js/coinCounter.js';

describe('Coin counter function', () => {

  test('Function should not accept a non-numeric input of 0 or less.', () => {
    const amount = 0;
    expect(coinCounter(amount)).toBe("Amount should be a number greater than 0.");
  });

});