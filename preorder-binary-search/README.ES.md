# Ejercicio — Recorrido en preorden (Preorder Traversal)

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

Crea una función recursiva `preorder(node)` que recorra el árbol en orden preorden, devolviendo un array con los valores en el orden en que son visitados.

El recorrido en preorden significa:

-   Visitar el nodo actual (raíz)
-   Recorrer el subárbol izquierdo
-   Recorrer el subárbol derecho

Ejemplo de recorrido esperado:

```js
["A", "B", "D", "E", "C", "F"];
```

Ejemplo de uso:

```js
console.log(preorder(tree));
// ["A", "B", "D", "E", "C", "F"]
```
