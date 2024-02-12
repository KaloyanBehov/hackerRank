function minTime(files, numCores, limit) {
  const x = [];
  const y = [];

  for (let f of files) {
    if (f % numCores === 0) {
      x.push(f);
    } else {
      y.push(f);
    }
  }

  x.sort((a, b) => b - a);
  let sumX = 0;
  for (let i = 0; i < Math.min(limit, x.length); i++) {
    sumX += x[i];
  }

  return (
    Math.floor(sumX / numCores) +
    x.slice(limit).reduce((acc, curr) => acc + curr, 0) +
    y.reduce((acc, curr) => acc + curr, 0)
  );
}

// Example usage:
const files = [4, 1, 3, 2, 8];
const numCores = 4;
const limit = 1;
const result = minTime(files, numCores, limit);
console.log(result);
