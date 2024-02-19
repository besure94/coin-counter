const coinCounter = (amount) => {
  const coinValues = {
    quarter: 0.25,
    dime: 0.10,
    nickel: 0.05,
    penny: 0.01
  }
  console.log(coinValues);

  const coinNumbers = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };
  console.log(coinNumbers);

  if (amount <= 0 || typeof amount !== "number") {
    return "Amount should be a number greater than 0.";
  } else {

  }
}

export default coinCounter;

// return amount;
  // if (amount < 0.25) {
  //   return 0;
  // }
  // return 1 + coinCounter(amount - 0.25);
