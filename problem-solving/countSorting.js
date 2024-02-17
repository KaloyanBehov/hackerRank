function countingSort(arr) {
  const frequency = new Array(100).fill(0);

  for (let i = 0; i < arr.length; i++) {
    frequency[arr[i]]++;
  }

  return frequency;
}
