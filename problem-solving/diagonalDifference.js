function diagonalDifference(arr) {
  let n = arr.length;
  let leftToRightSum = 0;
  let rightToLeftSum = 0;

  for (let i = 0; i < n; i++) {
    leftToRightSum += arr[i][i];
    rightToLeftSum += arr[i][n - 1 - i];
  }

  return Math.abs(leftToRightSum - rightToLeftSum);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
