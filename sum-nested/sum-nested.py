import array

# Utils

def is_array(x):
	return isinstance(x, (list, array.array))

# Version 1

def sum_nested(numbers):
	if len(numbers) == 0:
		return 0

	last = numbers[-1]
	rest = numbers[:-1]
	sum = sum_nested(last) if is_array(last) else last

	return sum + sum_nested(rest)

print(sum_nested([1, [2, 3], 4])) # 10
print(sum_nested([[1, 2], [3, [4, 5]]])) # 15
print(sum_nested([10, [20, [30]], 40])) # 100
print(sum_nested([])) # 0

# Version 2

def sum_nested_2(numbers):
	total = sum(
		sum_nested_2(n) if is_array(n) else n
		for n in numbers
	)
	return total

print(sum_nested_2([1, [2, 3], 4])) # 10
print(sum_nested_2([[1, 2], [3, [4, 5]]])) # 15
print(sum_nested_2([10, [20, [30]], 40])) # 100
print(sum_nested_2([])) # 0
