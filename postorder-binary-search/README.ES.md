# Ejercicio — Recorrido en postorden (Postorder Traversal)

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

Crea una función recursiva `postorder(node)` que recorra el árbol en orden postorden, devolviendo un array con los valores en el orden en que son visitados.

El recorrido postorden significa:

-   1️⃣ Recorrer el subárbol izquierdo
-   2️⃣ Recorrer el subárbol derecho
-   3️⃣ Visitar el nodo actual

Ejemplo de recorrido esperado:

```js
["D", "E", "B", "F", "C", "A"];
```

Ejemplo de uso:

```js
console.log(postorder(tree));
// ["D", "E", "B", "F", "C", "A"]
```

> 💡 Este recorrido es especialmente útil cuando necesitas procesar los hijos antes que el padre, por ejemplo, al eliminar nodos o evaluar expresiones.
