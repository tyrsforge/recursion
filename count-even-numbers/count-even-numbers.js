// Version 1

function countEvens(numbers, acc = []) {
	if (numbers.length === 0) return acc.length;

	const last = numbers.at(-1);
	const rest = numbers.slice(0, -1);

	if (last % 2 === 0) acc.push(last);

	return countEvens(rest, acc);
}

console.log(countEvens([1, 2, 3, 4, 5, 6])); // 3
console.log(countEvens([1, 3, 5])); // 0
console.log(countEvens([])); // 0
console.log(countEvens([2, 4, 6, 8])); // 4

// Version 2

function countEvens2(numbers) {
	if (numbers.length === 0) return 0;

	const last = numbers.at(-1);
	const rest = numbers.slice(0, -1);
	const count = last % 2 === 0 ? 1 : 0;

	return count + countEvens2(rest);
}

console.log("---------- Version 2 ----------");
console.log(countEvens2([1, 2, 3, 4, 5, 6])); // 3
console.log(countEvens2([1, 3, 5])); // 0
console.log(countEvens2([])); // 0
console.log(countEvens2([2, 4, 6, 8])); // 4
