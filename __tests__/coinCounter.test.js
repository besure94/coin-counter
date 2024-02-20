import coinCounter from './../src/js/coinCounter.js';

describe('Coin counter function', () => {

  test('Function should not accept a non-numeric input of 0 or less.', () => {
    const amount = -1;
    expect(coinCounter(amount)).toBe("Amount should be a number greater than 0.");
  });

  test('Function should contain an object with coin values for quarters, dimes, nickels, and pennies.', () => {
    const coinValues  = {
      quarter: 25,
      dime: 10,
      nickel: 5,
      penny: 1
    };
    expect(coinValues.quarter).toEqual(25);
    expect(coinValues.dime).toEqual(10);
    expect(coinValues.nickel).toEqual(5);
    expect(coinValues.penny).toEqual(1);
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
    const amount = 0.20;
    const coinAmounts = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
    const result = coinCounter(amount, coinAmounts);
    expect(result.dimes).toEqual(2);
  });

  test('Function should count the number of nickels for the amount provided.', () => {
    const amount = 0.05;
    const coinAmounts = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
    const result = coinCounter(amount, coinAmounts);
    expect(result.nickels).toEqual(1);
  });

  test('Function should count the number of pennies for the amount provided.', () => {
    const amount = 0.01;
    const coinAmounts = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
    const result = coinCounter(amount, coinAmounts);
    expect(result.pennies).toEqual(1);
  });

  test('Function should count the number of each coin for the amount provided.', () => {
    const amount = 4.99;
    const coinAmounts = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
    const result = coinCounter(amount, coinAmounts);
    expect(result).toEqual({ quarters: 19, dimes: 2, nickels: 0, pennies: 4 });
  });

  test('Function should count the number of each coin for the amount provided.', () => {
    const amount = 2.12;
    const coinAmounts = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
    const result = coinCounter(amount, coinAmounts);
    expect(result).toEqual({ quarters: 8, dimes: 1, nickels: 0, pennies: 2 });
  });

});