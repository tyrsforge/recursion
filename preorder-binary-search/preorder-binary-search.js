function preorder(node) {
	if (!node) return [];

	const left = preorder(node.left);
	const right = preorder(node.right);

	return [...node.value, ...left, ...right];
}

function preorderWithAccumulator(node, acc = []) {
	if (!node) return acc;

	acc.push(node.value);

	preorderWithAccumulator(node.left, acc);
	preorderWithAccumulator(node.right, acc);

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

console.log(preorder(tree));
console.log(preorderWithAccumulator(tree));
