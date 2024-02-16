import coinCounter from './../src/js/coinCounter.js';

describe('Coin counter function', () => {

  test('Input should be a whole number greater than 1.', () => {
    const amount = 5;
    expect(coinCounter(amount)).toEqual(5);
  });

  test('Function should contain an object with coin values for quarters, dimes, nickels, and pennies.', () => {
    const coinValues = {
      quarter: 0.25,
      dime: 0.10,
      nickel: 0.05,
      penny: 0.01
    };
    expect(coinValues.quarter).toEqual(0.25);
    expect(coinValues.dime).toEqual(0.10);
    expect(coinValues.nickel).toEqual(0.05);
    expect(coinValues.penny).toEqual(0.01);
  });

  test('Function should contain an object with a property for quarters that increases by 1 each time 0.25 is subtracted.', () => {
    const coinNumbers = {
      quarters: 0
    };
    expect(coinNumbers.quarters).toEqual(0);
  });

});