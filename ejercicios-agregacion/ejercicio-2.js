/*
* Ejercicio 2: Contar pedidos por estado

El área de operaciones necesita saber cuántos pedidos (orders) hay en cada estado (pending, paid, shipped).

Qué debes hacer
----------------

- Agrupar pedidos por su campo `status`.
- Contar cuántos hay en cada grupo.

Debes usar
-----------
- $group
- $sum
*/

db.orders.aggregate([
  {
    $group: {
      _id: "$status",
      totalOrders: { $sum: 1 },
    },
  },
]);
