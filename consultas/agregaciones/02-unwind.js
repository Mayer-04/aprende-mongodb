/*
 * $unwind: Desarma un arreglo y devuelve un documento por cada elemento.
 * Ideal para aplanar arrays antes de agrupar, ordenar o filtrar por cada item.
 */

// Pedidos con sus items como filas individuales
db.pedidos.aggregate([
  {
    $unwind: "$items", // cada elemento de items se convierte en un documento
  },
  {
    $project: {
      cliente: 1,
      productoId: "$items.productoId",
      cantidad: "$items.cantidad",
      subtotal: { $multiply: ["$items.cantidad", "$items.precio"] },
    },
  },
]);

// Con includeArrayIndex y preservando documentos sin coincidencias
db.pedidos.aggregate([
  {
    $unwind: {
      path: "$items",
      includeArrayIndex: "posicionItem", // 0,1,2,...
      preserveNullAndEmptyArrays: true, // conserva pedidos sin items
    },
  },
  {
    $project: {
      cliente: 1,
      posicionItem: 1,
      productoId: "$items.productoId",
      cantidad: "$items.cantidad",
    },
  },
]);

// Aplanar un array anidado para contar tags usados en comentarios
db.blogs.aggregate([
  { $unwind: "$comentarios" },
  { $unwind: "$comentarios.tags" },
  { $group: { _id: "$comentarios.tags", vecesUsado: { $sum: 1 } } },
  { $sort: { vecesUsado: -1 } },
]);
