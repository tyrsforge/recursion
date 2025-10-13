function reverseString(str) {
  if (str === "") return "";

  const lastChar = str.at(-1);
  const rest = str.slice(0, -1);

  return lastChar + reverseString(rest);
}

const result = reverseString("recursive");
console.log({ result });
