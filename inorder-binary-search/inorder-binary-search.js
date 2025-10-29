function inorder(node) {
	if (!node) return [];

	const left = inorder(node.left);
	const right = inorder(node.right);

	return [...left, node.value, ...right];
}

function inorderWithAccumulator(node, acc = []) {
	if (!node) return acc;

	inorderWithAccumulator(node.left, acc);
	acc.push(node.value);
	inorderWithAccumulator(node.right, acc);

	return acc;
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

console.log(inorder(tree));
console.log(inorderWithAccumulator(tree));
