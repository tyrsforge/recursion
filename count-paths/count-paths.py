def count_paths(x, y):
	if x == 1 or y == 1: return 1

	xPaths = count_paths(x - 1, y)
	yPaths = count_paths(x, y - 1)

	return xPaths + yPaths

print(count_paths(3, 3))

def count_paths_memoized(x, y, memo = {}):
	key = f"{x},{y}"

	if key in memo: return memo[key]

	if x == 1 or y == 1: return 1

	xPaths = count_paths_memoized(x - 1, y, memo)
	yPaths = count_paths_memoized(x, y - 1, memo)

	memo[key] = xPaths + yPaths

	return memo[key]

print("---- Memoized version ----")
print(count_paths_memoized(100, 100))
