/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 */

function miniMaxSum(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);

  const maxArr = arr.slice(1);
  const minArr = arr.slice();

  const maxNumber = maxArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  minArr.pop();
  const minNumber = minArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log(minNumber, maxNumber);
}

miniMaxSum([1, 2, 10, 4, 5]);
