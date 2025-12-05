/*
 * $group: Agrupa documentos y calcula acumulados.
 * Recuerda: _id es obligatorio; usa null si quieres un único grupo.
 */

// Ventas por cliente
db.pedidos.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalPedidos: { $sum: 1 },
      totalGastado: { $sum: "$total" },
      ultimoPedido: { $max: "$fecha" },
    },
  },
]);

// Conteo por día (extrayendo la fecha)
db.pedidos.aggregate([
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m-%d", date: "$fecha" } },
      pedidosDia: { $sum: 1 },
      montoDia: { $sum: "$total" },
    },
  },
  { $sort: { _id: 1 } },
]);

// Estadísticas globales (un solo grupo)
db.pedidos.aggregate([
  {
    $group: {
      _id: null,
      pedidos: { $sum: 1 },
      promedio: { $avg: "$total" },
      maximo: { $max: "$total" },
      minimo: { $min: "$total" },
    },
  },
]);
