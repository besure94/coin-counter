import coinCounter from './../src/js/coinCounter.js';

//refactor tests to work with recursive closure //

describe('Coin counter function', () => {

  test('Function should not accept a non-numeric input of 0 or less.', () => {
    const amount = 0;
    expect(coinCounter(amount)).toBe("Amount should be a number greater than 0.");
  });

  // test('Function should contain an inner function that can count quarters for an amount.', () => {
  //   const amount = 1;
  //   const coinAmounts = {
  //     quarters: 0,
  //     dimes: 0,
  //     nickels: 0,
  //     pennies: 0
  //   };
  //   const quarterCounter = coinCounter(amount, coinAmounts);
  //   expect(typeof quarterCounter).toBe("function");
  // });

  // test('The quarterCounter function should count the number of quarters for the supplied amount.', () => {
  //   const amount = 1;
  //   const coinAmounts = {
  //     quarters: 0,
  //     dimes: 0,
  //     nickels: 0,
  //     pennies: 0
  //   };
  //   const result = coinCounter(amount, coinAmounts)();
  //   expect(result.quarters).toEqual(4);

  // });

});