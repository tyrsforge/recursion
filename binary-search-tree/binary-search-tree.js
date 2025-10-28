function findNode(node, searchedValue) {
	if (!node) return null;
	if (node.value === searchedValue) return node;

	const nextNode = searchedValue < node.value ? node.left : node.right;

	return findNode(nextNode, searchedValue);
}

function findNodeWithoutRecursion(node, searchedValue) {
	while (node) {
		if (node.value === searchedValue) return node;

		node = searchedValue < node.value ? node.left : node.right;
	}

	return null;
}

function findNodeWithPath(node, searchedValue, path = []) {
	if (!node) return null;

	path.push(node.value);

	if (node.value === searchedValue) return { node, path };

	const next = searchedValue < node.value ? node.left : node.right;

	return findNodeWithPath(next, searchedValue, path);
}

const bst = {
	value: 8,
	left: {
		value: 3,
		left: { value: 1, left: null, right: null },
		right: { value: 6, left: { value: 4 }, right: { value: 7 } },
	},
	right: {
		value: 10,
		right: { value: 14, left: { value: 13 }, right: null },
	},
};

console.log(findNode(bst, 6)); // returns node with value 6
console.log(findNode(bst, 2)); // return null

console.log(findNodeWithoutRecursion(bst, 7)); // returns node with value 7
console.log(findNodeWithoutRecursion(bst, 2)); // return null

console.log(findNodeWithPath(bst, 13)); // returns node with value 13 and its path
console.log(findNodeWithPath(bst, 2)); // return null
