Given a Binary Search Tree (BST), implement a recursive function `findNode(root, value)` that returns the node containing the searched value, or `null` if it does not exist.

A Binary Search Tree satisfies:

-   Values in the left subtree are smaller than the current node’s value.
-   Values in the right subtree are greater than the current node’s value.

The function should use this property to decide at each step whether to search on the left or right branch, avoiding unnecessary traversals.

```js
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

findNode(bst, 6); // returns the node with value 6
findNode(bst, 2); // returns null
```
