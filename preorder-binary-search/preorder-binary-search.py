def preorder(node):
	if node is None: return []

	left = preorder(node["left"])
	right = preorder(node["right"])

	return [node["value"]] + left + right

def preorder_with_accumulator(node, acc = []):
	if acc is None: acc = []
	if node is None: return acc

	acc.append(node["value"])

	preorder_with_accumulator(node["left"], acc)
	preorder_with_accumulator(node["right"], acc)

	return acc

tree = {
	"value": "A",
	"left": {
		"value": "B",
		"left": { "value": "D", "left": None, "right": None },
		"right": { "value": "E", "left": None, "right": None },
	},
	"right": {
		"value": "C",
		"left": None,
		"right": { "value": "F", "left": None, "right": None },
	},
}

print(preorder(tree))
print(preorder_with_accumulator(tree))
