// Version 1

function sumNested(numbers) {
	if (numbers.length === 0) return 0;

	const last = numbers.at(-1);
	const rest = numbers.slice(0, -1);
	const sum = Array.isArray(last) ? sumNested(last) : last;

	return sum + sumNested(rest);
}

console.log(sumNested([1, [2, 3], 4])); // 10

console.log(
	sumNested([
		[1, 2],
		[3, [4, 5]],
	]),
); // 15

console.log(sumNested([10, [20, [30]], 40])); // 100
console.log(sumNested([])); // 0

// Version 2

function sumNested2(numbers) {
	const sum = numbers.reduce(
		(acc, current) =>
			acc + (Array.isArray(current) ? sumNested2(current) : current),
		0,
	);

	return sum;
}

console.log("----------- Version 2 -----------");
console.log(sumNested2([1, [2, 3], 4])); // 10

console.log(
	sumNested2([
		[1, 2],
		[3, [4, 5]],
	]),
); // 15

console.log(sumNested2([10, [20, [30]], 40])); // 100
console.log(sumNested2([])); // 0
