def inorder(node):
	if node is None: return []

	left = inorder(node["left"])
	right = inorder(node["right"])

	return left + [node["value"]] + right

def inorder_with_accumulator(node, acc=None):
	if acc is None: acc = []
	if node is None: return []

	inorder_with_accumulator(node["left"], acc)
	acc.append(node["value"])
	inorder_with_accumulator(node["right"], acc)

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

print(inorder(tree))
print(inorder_with_accumulator(tree))
