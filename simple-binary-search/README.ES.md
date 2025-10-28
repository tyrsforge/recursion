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

Crea una función recursiva `findNode(root, searchedValue)` que busque un nodo con el valor indicado (`searchedValue`) y lo devuelva.
Si el valor no existe en el árbol, la función debe devolver `null`.

La función debe recorrer todo el árbol (buscando primero en el hijo izquierdo y luego en el derecho) hasta encontrar el valor o llegar al final.

Ejemplos:

```js
findNode(tree, "C"); // devuelve el nodo con valor "C"
findNode(tree, "Z"); // devuelve null
```
