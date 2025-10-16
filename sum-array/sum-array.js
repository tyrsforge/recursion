function sumArray(numbers) {
  if (numbers.length === 0) return 0;

  const last = numbers.at(-1);
  const rest = numbers.slice(0, -1);

  return last + sumArray(rest);
}

const result = sumArray([1, 2, 3, 4]);
console.log(result);
