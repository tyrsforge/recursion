function countPaths(x, y) {
	if (x === 1 || y === 1) return 1;

	const xPaths = countPaths(x - 1, y);
	const yPaths = countPaths(x, y - 1);

	return xPaths + yPaths;
}

console.time("Normal countPaths");
console.log(countPaths(17, 17)); // 601080390 - Normal countPaths: 3.166s
console.timeEnd("Normal countPaths");

function countPathsMemoized(x, y, memo = {}) {
	const key = `${x},${y}`;

	if (memo[key]) return memo[key];

	if (x === 1 || y === 1) return 1;

	const xPaths = countPathsMemoized(x - 1, y, memo);
	const yPaths = countPathsMemoized(x, y - 1, memo);

	memo[key] = xPaths + yPaths;

	return memo[key];
}

console.log("---- Memoized version ----");
console.time("Memoized countPaths");
console.log(countPathsMemoized(50, 50)); // 2.5477612258980867e+28 - Memoized countPaths: 1.707ms
console.timeEnd("Memoized countPaths");
