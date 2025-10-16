def sum_array(n):
	if len(n) == 0:
		return 0

	last = n[-1]
	rest = n[:-1]

	return last + sum_array(rest)

result = sum_array([1, 2, 3, 4])
print(result)
