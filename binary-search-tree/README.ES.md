Dado un árbol binario de búsqueda (BST), implementa una función recursiva `findNode(root, value)` que devuelva el nodo que contiene el valor buscado, o `null` si no existe.

Un árbol binario de búsqueda cumple que:

-   Los valores del subárbol izquierdo son menores que el del nodo actual.
-   Los valores del subárbol derecho son mayores que el del nodo actual.

La función debe aprovechar esta propiedad para decidir en cada paso si buscar a la izquierda o a la derecha, sin recorrer ramas innecesarias.

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

findNode(bst, 6); // devuelve el nodo con valor 6
findNode(bst, 2); // devuelve null
```
