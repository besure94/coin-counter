const coinCounter = function(amount) {
  if(isNaN(amount) || amount <= 0) {
    throw "Invalid amount. Please enter a positive number";
  }
  return amount;
}

export default coinCounter;