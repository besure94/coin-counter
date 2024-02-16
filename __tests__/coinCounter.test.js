import coinCounter from './../src/js/coinCounter.js';

describe('Coin counter function', () => {

  test('Should return an inputted number', () => {
    const amount = 1;
    expect(coinCounter(amount)).toEqual(1);
  });
});