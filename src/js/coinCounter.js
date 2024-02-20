const coinCounter = (startingAmount) => {
  const coinValues = {
    quarter: 0.25,
    dime: 0.10,
    nickel: 0.05,
    penny: 0.01
  }

  const coinAmounts = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }

  function countCoins(amount, fn) {
    if (amount <= 0 || typeof amount !== "number") {
      return "Amount should be a number greater than 0.";
    }
    if (amount >= coinValues.quarter) {
      coinAmounts.quarters++;
      return fn(amount - coinValues.quarter, fn);
    } else if (amount >= coinValues.dime) {
      coinAmounts.dimes++;
      return fn(amount - coinValues.dime, fn);
    } else if (amount >= coinValues.nickel) {
      coinAmounts.nickels++;
      return fn(amount - coinValues.nickel, fn);
    } else if (amount >= coinValues.penny) {
      coinAmounts.pennies++;
      return fn(amount - coinValues.penny, fn);
    }
    return coinAmounts;
  }

  return countCoins(startingAmount, countCoins);
}

export default coinCounter;

