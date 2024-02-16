const coinCounter = (amount) => {
  const validDecimal = /^\d+(\.\d{1,2})?$/;
  if(isNaN(amount) || amount <= 0) {
    throw "Invalid amount. Please enter a positive number.";
  } else {
    return validDecimal.test(amount);
  }
}

export default coinCounter;