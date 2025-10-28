Given the following binary tree:

```js
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
```

Create a recursive function `findNode(root, searchedValue)` that searches for a node with the given value (`searchedValue`) and returns it.
If the value does not exist in the tree, the function should return `null`.

The function must traverse the entire tree (searching the left child first, then the right) until the value is found or the tree ends.

Examples:

```js
findNode(tree, "C"); // returns the node with value "C"
findNode(tree, "Z"); // returns null
```
