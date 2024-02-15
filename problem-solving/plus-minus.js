/**Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable. */

function plusMinus(arr) {
  // Write your code here
  const positive = [];
  const negative = [];
  const zeros = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else if (arr[i] > 0) {
      positive.push(arr[i]);
    } else {
      negative.push(arr[i]);
    }
  }
  let postiveResult = positive.length / arr.length;
  let negativeResult = negative.length / arr.length;
  let zeroesResult = zeros.length / arr.length;
  console.log(postiveResult.toFixed(6));
  console.log(negativeResult.toFixed(6));
  console.log(zeroesResult.toFixed(6));
}

plusMinus([1, 1, 0, -1, -1]);
