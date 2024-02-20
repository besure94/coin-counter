const coinCounter = (amount) => {
  if (amount <= 0 || typeof amount !== "number") {
    return "Amount should be a number greater than 0.";
  }
}

export default coinCounter;

