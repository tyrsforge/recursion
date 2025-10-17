function fizzbuzz(n) {
	if (n === 0) return [];

	const is3 = n % 3 === 0;
	const is5 = n % 5 === 0;
	const is3And5 = is3 && is5;

	let result = n;

	if (is3And5) result = "FizzBuzz";
	else if (is3) result = "Fizz";
	else if (is5) result = "Buzz";

	return fizzbuzz(n - 1).concat(result);
}

console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
