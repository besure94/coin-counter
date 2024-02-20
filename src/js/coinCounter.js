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

  let remainingAmount = startingAmount;

  function countQuarters() {
    if (remainingAmount  >= coinValues.quarter) {
      coinAmounts.quarters = Math.floor(remainingAmount  / coinValues.quarter);
      remainingAmount = (remainingAmount - coinAmounts.quarters * coinValues.quarter).toFixed(2);
    }
  }

  function countDimes() {
    if (remainingAmount  >= coinValues.dime) {
      coinAmounts.dimes = Math.floor(remainingAmount  / coinValues.dime);
      remainingAmount = (remainingAmount - coinAmounts.dimes * coinValues.dime).toFixed(2);
    }
  }

  function countNickels() {
    if (remainingAmount >= coinValues.nickel) {
      coinAmounts.nickels = Math.floor(remainingAmount  / coinValues.nickel);
      remainingAmount = (remainingAmount - coinAmounts.nickels * coinValues.nickel).toFixed(2);
    }
  }

  function countPennies() {
    if (remainingAmount >= coinValues.penny) {
      coinAmounts.pennies = Math.floor(remainingAmount  / coinValues.penny);
      remainingAmount = (remainingAmount - coinAmounts.pennies * coinValues.penny).toFixed(2);
    }
  }

  function countAllCoins() {
    countQuarters();
    countDimes();
    countNickels();
    countPennies();
    return coinAmounts;
  }

  return countAllCoins();
}

export default coinCounter;

