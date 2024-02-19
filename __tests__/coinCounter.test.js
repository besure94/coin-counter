import coinCounter from './../src/js/coinCounter.js';

describe('Coin counter function', () => {

  test('Function should not accept a non-numeric input of 0 or less.', () => {
    const amount = -1;
    expect(coinCounter(amount)).toBe("Amount should be a number greater than 0.");
  });

  test('Function should contain an object with coin values for quarters, dimes, nickels, and pennies.', () => {
    const coinValues  = {
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

  test('Function should contain an object with a property for quarters.', () => {
    const coinNumbers = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
    expect(coinNumbers.quarters).toEqual(0);
    expect(coinNumbers.dimes).toEqual(0);
    expect(coinNumbers.nickels).toEqual(0);
    expect(coinNumbers.pennies).toEqual(0);
  });

});