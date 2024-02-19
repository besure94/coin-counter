const coinCounter = (amount, coinAmounts = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }) => {
  const coinValues = {
    quarter: 0.25,
    dime: 0.10,
    nickel: 0.05,
    penny: 0.01
  }

  if (amount <= 0 || typeof amount !== "number") {
    return "Amount should be a number greater than 0.";
  }

  if (amount >= coinValues.quarter) {
    coinAmounts.quarters++;
    coinCounter(amount - coinValues.quarter, coinAmounts);
  }

  return coinAmounts;
}

export default coinCounter;
