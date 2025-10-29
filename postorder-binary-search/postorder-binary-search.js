function postorder(node) {
	if (!node) return [];

	const left = postorder(node.left);
	const right = postorder(node.right);

	return [...left, ...right, node.value];
}

function postorderWithAccumulator(node, acc = []) {
	if (!node) return acc;

	postorderWithAccumulator(node.left, acc);
	postorderWithAccumulator(node.right, acc);
	acc.push(node.value);

	return acc;
}

function iterativePostorder(tree) {
	if (!tree) return [];

	const stack = [tree];
	const result = [];

	while (stack.length > 0) {
		const node = stack.pop();

		result.push(node.value);

		if (node.left) stack.push(node.left);
		if (node.right) stack.push(node.right);
	}

	return result.reverse();
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

console.log(postorder(tree));
console.log(postorderWithAccumulator(tree));
console.log(iterativePostorder(tree));
