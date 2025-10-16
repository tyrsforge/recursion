def count_evens(numbers):
	if len(numbers) == 0:
		return 0

	last = numbers[-1]
	rest = numbers[:-1]
	count = 1 if last % 2 == 0 else 0

	return count + count_evens(rest)

print(count_evens([1, 2, 3, 4, 5, 6])); # 3
print(count_evens([1, 3, 5])); # 0
print(count_evens([])); # 0
print(count_evens([2, 4, 6, 8])); # 4
