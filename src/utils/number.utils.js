let previousResult = null;
let currentResult = null;

export function generateRandomNumber(max) {
  do {
    currentResult = Math.floor(Math.random() * max) + 1;
  } while (currentResult === previousResult);
  previousResult = currentResult;
  return currentResult;
}

export function generateRandomArray(max) {
  let randomArray = [];
  while (randomArray.length < max) {
    let randomNum = Math.floor(Math.random() * max) + 1;
    if (!randomArray.includes(randomNum)) {
      randomArray.push(randomNum);
    }
  }
  return randomArray;
}