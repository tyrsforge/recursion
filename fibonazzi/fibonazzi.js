function fibonazzi(n) {
	if (n === 0) return 0;
	if (n === 1) return 1;

	const current = fibonazzi(n - 1);
	const next = fibonazzi(n - 2);

	return current + next;
}

console.log(fibonazzi(0)); // 0
console.log(fibonazzi(1)); // 1
console.log(fibonazzi(2)); // 1
console.log(fibonazzi(3)); // 2
console.log(fibonazzi(4)); // 3
console.log(fibonazzi(5)); // 5
console.log(fibonazzi(8)); // 8

function memoizedFibonazzi(n, memo = {}) {
	if (n in memo) return memo[n];

	if (n === 0) return 0;
	if (n === 1) return 1;

	memo[n] = memoizedFibonazzi(n - 1, memo) + memoizedFibonazzi(n - 2, memo);

	return memo[n];
}

console.log(memoizedFibonazzi(0)); // 0
console.log(memoizedFibonazzi(1)); // 1
console.log(memoizedFibonazzi(2)); // 1
console.log(memoizedFibonazzi(3)); // 2
console.log(memoizedFibonazzi(4)); // 3
console.log(memoizedFibonazzi(5)); // 5
console.log(memoizedFibonazzi(8)); // 8
