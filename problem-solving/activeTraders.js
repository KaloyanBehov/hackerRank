function mostActive(customers) {
  const itShouldBe = [];
  const frequencyMap = {};

  // Count occurrences of each customer
  for (let i = 0; i < customers.length; i++) {
    const name = customers[i];
    frequencyMap[name] = (frequencyMap[name] || 0) + 1;
  }

  const totalCount = customers.length;

  // Check if each customer's frequency is >= 5% of the total occurrences
  for (const name in frequencyMap) {
    const count = frequencyMap[name];
    if ((count * 100) / totalCount >= 5) {
      itShouldBe.push(name);
    }
  }

  return itShouldBe.sort()
}

mostActive([
  "Bigcorp",
  "Bigcorp",
  "Acme",
  "Bigcorp",
  "Zork",
  "Zork",
  "Abc",
  "Bigcorp",
  "Acme",
  "Bigcorp",
  "Bigcorp",
  "Zork",
  "Bigcorp",
  "Zork",
  "Zork",
  "Bigcorp",
  "Acme",
  "Bigcorp",
  "Acme",
  "Littlecorp",
  "Nadircorp",
]);
