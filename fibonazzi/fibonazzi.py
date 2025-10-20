def fibonazzi(n):
	if n == 0: return 0
	if n == 1: return 1

	return fibonazzi(n - 1) + fibonazzi(n - 2)

print(fibonazzi(0))
print(fibonazzi(1))
print(fibonazzi(2))
print(fibonazzi(3))
print(fibonazzi(4))
print(fibonazzi(5))
print(fibonazzi(8))

def memoized_fibonazzi(n, memo = {}):
	if n in memo: return memo[n]

	if n == 0: return 0
	if n == 1: return 1

	memo[n] = memoized_fibonazzi(n - 1, memo) + memoized_fibonazzi(n - 2, memo)

	return memo[n]

print("---- Memoized fibonazzi ----")
print(memoized_fibonazzi(0))
print(memoized_fibonazzi(1))
print(memoized_fibonazzi(2))
print(memoized_fibonazzi(3))
print(memoized_fibonazzi(4))
print(memoized_fibonazzi(5))
print(memoized_fibonazzi(8))
