import coinCounter from './../src/js/coinCounter.js';

describe('Coin counter function', () => {

  test('Should return an inputted number', () => {
    expect(coinCounter(1)).toEqual(1);
  });
});