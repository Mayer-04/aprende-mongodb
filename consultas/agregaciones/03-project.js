/*
 * $project: Controla qué campos se devuelven y cómo se calculan.
 * 1 = incluir, 0 = excluir (no mezclar en el mismo nivel).
 */

// Construir un nombre completo y ocultar _id
db.usuarios.aggregate([
  {
    $project: {
      _id: 0,
      nombreCompleto: { $concat: ["$nombre", " ", "$apellido"] },
      correo: 1,
      activo: 1,
    },
  },
]);

// Renombrar campos y crear calculados
db.pedidos.aggregate([
  {
    $project: {
      pedidoId: "$_id",
      cliente: 1,
      fechaISO: { $dateToString: { format: "%Y-%m-%d", date: "$fecha" } },
      total: 1,
      conEnvioGratis: { $gte: ["$total", 500000] },
    },
  },
]);

// Excluir subcampos de un array embebido
db.productos.aggregate([
  {
    $project: {
      nombre: 1,
      precio: 1,
      "reviews.comentario": 0, // quita campos pesados
    },
  },
]);
