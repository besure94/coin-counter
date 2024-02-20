const coinCounter = (amount, coinAmounts = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }) => {
  const coinValues = {
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  }

  if (amount <= 0 || typeof amount !== "number") {
    return "Amount should be a number greater than 0.";
  }

  const roundedAmount = (amount * 100).toFixed(0);

  if (roundedAmount >= coinValues.quarter) {
    coinAmounts.quarters++;
    coinCounter(amount - coinValues.quarter / 100, coinAmounts);
  } else if (roundedAmount >= coinValues.dime) {
    coinAmounts.dimes++;
    coinCounter(amount - coinValues.dime / 100, coinAmounts);
  } else if (roundedAmount >= coinValues.nickel) {
    coinAmounts.nickels++;
    coinCounter(amount - coinValues.nickel / 100, coinAmounts);
  } else if (roundedAmount >= coinValues.penny) {
    coinAmounts.pennies++;
    coinCounter(amount - coinValues.penny / 100, coinAmounts);
  }

  return coinAmounts;
}

export default coinCounter;