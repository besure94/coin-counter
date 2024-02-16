const coinCounter = function(amount) {
  if(isNaN(amount)) {
    throw "Invalid amount. Please enter a positive number";
  }
  return amount;
}

coinCounter(1);

export default coinCounter;