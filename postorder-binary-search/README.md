# Excercise - Postorder traversal

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

Create a recursive function `postorder(node)` that traverses the tree in postorder order, returning an array with the values in the order they are visited.

A postorder traversal means:

-   1️⃣ Traverse the left subtree
-   2️⃣ Traverse the right subtree
-   3️⃣ Visit the current node

Expected output:

```js
["D", "E", "B", "F", "C", "A"];
```

Example:

```js
console.log(postorder(tree));
// ["D", "E", "B", "F", "C", "A"]
```

> 💡 This traversal is especially useful when you need to process children before their parent, e.g. deleting nodes or evaluating expression trees.
