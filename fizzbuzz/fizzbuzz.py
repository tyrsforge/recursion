def fizzbuzz(n):
	if n == 0:
		return []

	is3 = n % 3 == 0
	is5 = n % 5 == 0
	is3And5 = is3 and is5

	result = n

	if is3And5:
		result = "FizzBuzz"
	elif is3:
		result = "Fizz"
	elif is5:
		result = "Buzz"

	return fizzbuzz(n - 1) + [result]

print(fizzbuzz(5))
print(fizzbuzz(15))
