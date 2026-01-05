/*
* Ejercicio 3: Calcular total gastado por usuario

Se quiere identificar a los clientes que más compran.

Qué debes hacer
----------------

- Agrupar pedidos por userId.
- Calcular el total gastado (amount).

Debes usar
-----------
- $group
- $sum
*/

db.orders.aggregate([
  {
    $group: {
      _id: "$userId",
      totalGastado: { $sum: "$amount" },
    },
  },
]);
