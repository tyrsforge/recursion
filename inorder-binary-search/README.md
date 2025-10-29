# Exercise - Inorder traversal

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

Create a recursive function `inorder(node)` that traverses the tree in inorder order, returning an array with the values in the order they are visited.

An inorder traversal means:

-   1️⃣ Traverse the left subtree
-   2️⃣ Visit the current node
-   3️⃣ Traverse the right subtree

Expected output:

```js
["D", "B", "E", "A", "C", "F"];
```

Example:

```js
console.log(inorder(tree));
// ["D", "B", "E", "A", "C", "F"]
```

> 💡 In a Binary Search Tree (BST), this traversal returns the values in sorted order (ascending).
