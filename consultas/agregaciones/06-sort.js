/*
 * $sort: Ordena documentos en el pipeline.
 * 1 = ascendente, -1 = descendente. Coloca índices cuando uses $match + $sort seguido.
 */

// Top 10 pedidos entregados por fecha y total
db.pedidos.aggregate([
  { $match: { estado: "ENTREGADO" } },
  { $sort: { fecha: -1, total: -1 } }, // fecha más reciente primero
  { $limit: 10 },
  { $project: { _id: 0, pedidoId: "$_id", fecha: 1, total: 1 } },
]);

// Ordenar texto con locale (requiere collation en la colección o en el comando)
db.usuarios.aggregate([
  {
    $sort: { nombre: 1 },
  },
]);

// Ordenar resultados agregados
db.pedidos.aggregate([
  { $group: { _id: "$clienteId", totalGastado: { $sum: "$total" } } },
  { $sort: { totalGastado: -1 } },
]);
