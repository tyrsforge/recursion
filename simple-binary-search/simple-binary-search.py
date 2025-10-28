def find_node(node, searchedValue):
	if node is None: return
	if node["value"] == searchedValue: return node

	left = find_node(node["left"], searchedValue)

	if left: return left

	return find_node(node["right"], searchedValue)

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

print(find_node(tree, "F"))
