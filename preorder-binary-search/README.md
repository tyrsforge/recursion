# Exercise — Preorder Traversal

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

Create a recursive function `preorder(node)` that traverses the tree in preorder order, returning an array with the values in the order they are visited.

A preorder traversal means:

-   Visit the current node (root)
-   Traverse the left subtree
-   Traverse the right subtree

Expected output:

```js
["A", "B", "D", "E", "C", "F"];
```

Example:

```js
console.log(preorder(tree));
// ["A", "B", "D", "E", "C", "F"]
```
