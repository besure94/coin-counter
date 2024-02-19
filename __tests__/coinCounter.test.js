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
    const coinAmounts = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
    expect(coinAmounts.quarters).toEqual(0);
    expect(coinAmounts.dimes).toEqual(0);
    expect(coinAmounts.nickels).toEqual(0);
    expect(coinAmounts.pennies).toEqual(0);
  });

  test('Function should count the number of quarters for the amount provided.', () => {
    const amount = 10;
    const coinAmounts = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
    const result = coinCounter(amount, coinAmounts);
    expect(result.quarters).toEqual(40);
  });

  test('Function should count the number of dimes for the amount provided.', () => {
    const amount = 5.20;
    const coinAmounts = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
    const result = coinCounter(amount, coinAmounts);
    expect(result.quarters).toEqual(20);
    expect(result.dimes).toEqual(2);
  });

});