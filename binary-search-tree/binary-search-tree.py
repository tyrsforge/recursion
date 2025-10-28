def find_node(node, searched_value):
	if node is None: return None
	if node["value"] == searched_value: return node

	next_node = node["left"] if searched_value < node["value"] else node["right"]

	return find_node(next_node, searched_value)

def find_node_without_recursion(node, searched_value):
	while node:
		if node["value"] == searched_value: return node

		node = node["left"] if searched_value < node["value"] else node["right"]

	return None

def find_node_with_path(node, searched_value, path = []):
	if not node: return None

	path.append(node["value"])

	if node["value"] == searched_value: return { "node": node, "path": path }

	next = node["left"] if searched_value < node["value"] else node["right"]

	return find_node_with_path(next, searched_value, path)

bst = {
	"value": 8,
	"left": {
		"value": 3,
		"left": { "value": 1, "left": None, "right": None },
		"right": { "value": 6, "left": { "value": 4 }, "right": { "value": 7 } },
	},
	"right": {
		"value": 10,
		"right": { "value": 14, "left": { "value": 13 }, "right": None },
	},
}

print(find_node(bst, 6)) # returns node with value 6
print(find_node(bst, 2)) # returns None

print(find_node(bst, 7)) # returns node with value 7
print(find_node(bst, 2)) # returns None

print(find_node_with_path(bst, 13)) # returns node with value 13 and its path
print(find_node_with_path(bst, 2)) # returns None
