# Ejercicio — Recorrido en inorden (Inorder Traversal)

Dado el siguiente árbol binario:

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

Crea una función recursiva `inorder(node)` que recorra el árbol en orden inorden, devolviendo un array con los valores en el orden en que son visitados.

El recorrido inorden significa:

-   1️⃣ Recorrer el subárbol izquierdo
-   2️⃣ Visitar el nodo actual
-   3️⃣ Recorrer el subárbol derecho

Ejemplo de recorrido esperado:

```js
["D", "B", "E", "A", "C", "F"];
```

Ejemplo de uso:

```js
console.log(inorder(tree));
// ["D", "B", "E", "A", "C", "F"]
```

> 💡 En un árbol binario de búsqueda (BST), este recorrido devuelve los valores ordenados de menor a mayor.
