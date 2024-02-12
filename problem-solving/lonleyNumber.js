function lonelyinteger(a) {
  // Write your code here
  if (a.length <= 1) {
    return Number(a);
  }
  const appearingTwice = [];
  for (let index = 0; index < a.length; index++) {
    let count = 0;

    for (let j = 0; j < a.length; j++) {
      if (a[j] === a[index]) {
        count++;
        if (count >= 2) {
          appearingTwice.push(a[j]);
        }
      }
    }
  }
  const unique = [];
  for (let index = 0; index < appearingTwice.length; index++) {
    if (!appearingTwice.includes(a[index])) {
      unique(a[index]);
    }
  }

  return Number(unique);
}
console.log(lonelyinteger([1, 1, 2]));
