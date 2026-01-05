/*
* Ejercicio 4: Limitar resultados para un dashboard

Un dashboard solo debe mostrar los 5 pedidos más recientes.

Qué debes hacer
----------------

- Ordenar pedidos por fecha (createdAt).
- Mostrar solo los primeros 5.

Debes usar
-----------

- $sort
- $limit
*/

// Solución
db.orders.aggregate([
  {
    $sort: { createdAt: -1 }, // -1 Para que los recientes queden arriba
  },
  {
    $limit: 5,
  },
]);

/*
* NOTAS:
1 (Ascendente): Ordena del más antiguo al más nuevo. 
-1 (Descendente): Ordena del más nuevo al más antiguo. 
*/
