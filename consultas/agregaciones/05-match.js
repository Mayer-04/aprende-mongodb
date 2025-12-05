/*
 * $match: Filtra documentos dentro del pipeline.
 * Ponlo al inicio para reducir datos temprano y aprovechar índices.
 */

// Usuarios activos de México
db.usuarios.aggregate([
  { $match: { pais: "MX", activo: true } },
  { $project: { _id: 0, nombre: 1, correo: 1 } },
]);

// Filtrar usando expresiones con $expr
db.pedidos.aggregate([
  {
    $match: {
      $expr: { $gt: ["$total", "$impuesto"] }, // total > impuesto
    },
  },
  { $project: { total: 1, impuesto: 1 } },
]);

// $match después de $group para filtrar agregados
db.pedidos.aggregate([
  { $group: { _id: "$clienteId", totalGastado: { $sum: "$total" } } },
  { $match: { totalGastado: { $gte: 1000000 } } },
  { $sort: { totalGastado: -1 } },
]);
