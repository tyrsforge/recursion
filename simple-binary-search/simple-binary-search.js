function findNode(node, searchedValue) {
	if (!node) return;
	if (node.value === searchedValue) return node;

	const left = findNode(node.left, searchedValue);

	if (left) return left;

	return findNode(node.right, searchedValue);
}

const tree = {
	value: "A",
	left: {
		value: "B",
		left: { value: "D", left: null, right: null },
		right: { value: "E", left: null, right: null },
	},
	right: {
		value: "C",
		left: null,
		right: { value: "F", left: null, right: null },
	},
};

console.log(findNode(tree, "C"));
