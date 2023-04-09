let previousResult = null;
let currentResult = null;

export function generateRandomNumber(max) {
  do {
    currentResult = Math.floor(Math.random() * max) + 1;
  } while (currentResult === previousResult);
  previousResult = currentResult;
  return currentResult;
}