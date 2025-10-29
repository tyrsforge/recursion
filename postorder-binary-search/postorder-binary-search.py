def postorder(node):
	if node is None: return []

	left = postorder(node["left"])
	right = postorder(node["right"])

	return left + right + [node["value"]]

def postorder_with_accumulator(node, acc=None):
	if acc is None: acc = []
	if node is None: return acc

	postorder_with_accumulator(node["left"], acc)
	postorder_with_accumulator(node["right"], acc)
	acc.append(node["value"])

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

print(postorder(tree))
print(postorder_with_accumulator(tree))
