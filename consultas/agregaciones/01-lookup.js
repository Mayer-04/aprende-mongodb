/*
 * aggregate(): Es el comando que te permite hacer consultas avanzadas y análisis en MongoDB,
 * pasando tus datos por una serie de pasos llamados etapas.
 * $lookup - "JOIN" entre colecciones
 * Ejemplos para entender el operador de agregacion $lookup.
 */

/*
 * $lookup: Permite traer datos de otra colección, parecido a un “JOIN” en bases SQL. Tienes una colección
 *  de estudiantes y otra de cursos. Con $lookup puedes mostrar qué curso está inscrito cada estudiante.
 *
 * $unwind: Si un documento tiene un campo que es un array (lista),
 *  lo convierte en varios documentos, uno por cada elemento de la lista.
 *
 * $project: Permite decidir qué campos quieres ver en el resultado y cómo se muestran.
 *  1 = Incluir, 0 = Excluir
 *
 * $group: Junta documentos que tienen algo en común y calcula valores sobre ellos (sumas, promedios, conteos).
 */

// Ejemplo base: usuarios con sus pedidos (1:N)
db.usuarios.aggregate([
  {
    $lookup: {
      from: "pedidos", // coleccion origen de la relacion
      localField: "_id", // campo en usuarios
      foreignField: "usuarioId", // campo en pedidos
      as: "pedidos", // nombre del arreglo resultante
    },
  },
]);

// Variante con unwind y proyeccion (evita arreglos anidados si solo necesitas filas planas)
db.usuarios.aggregate([
  {
    $lookup: {
      from: "pedidos",
      localField: "_id",
      foreignField: "usuarioId",
      as: "pedidos",
    },
  },
  { $unwind: "$pedidos" }, // desarma el arreglo de pedidos
  {
    $project: {
      nombre: 1,
      correo: 1,
      pedidoId: "$pedidos._id",
      total: "$pedidos.total",
      fecha: "$pedidos.fecha",
    },
  },
]);

// $lookup con pipeline (filtrar antes de traer, ideal para limitar datos)
db.usuarios.aggregate([
  {
    $lookup: {
      from: "pedidos",
      let: { uid: "$_id" }, // variables locales
      pipeline: [
        { $match: { $expr: { $eq: ["$usuarioId", "$$uid"] } } },
        { $match: { estado: "ENTREGADO" } }, // filtrar solo los entregados
        { $project: { _id: 1, total: 1, fecha: 1 } },
        { $sort: { fecha: -1 } },
        { $limit: 5 },
      ],
      as: "pedidosEntregados",
    },
  },
]);

// $lookup anidando colecciones (pedidos -> items -> productos)
db.pedidos.aggregate([
  {
    $lookup: {
      from: "itemsPedido",
      localField: "_id",
      foreignField: "pedidoId",
      as: "items",
    },
  },
  { $unwind: "$items" },
  {
    $lookup: {
      from: "productos",
      localField: "items.productoId",
      foreignField: "_id",
      as: "producto",
    },
  },
  { $unwind: "$producto" },
  {
    $project: {
      _id: 1,
      cliente: 1,
      fecha: 1,
      "producto.nombre": 1,
      "producto.precio": 1,
      cantidad: "$items.cantidad",
      subtotal: { $multiply: ["$items.cantidad", "$producto.precio"] },
    },
  },
]);

/*
 * Buenas practicas con $lookup
 * - Crea indices en los campos usados como localField/foreignField (ej: pedidos.usuarioId).
 * - Prefiere la forma con pipeline para filtrar y proyectar solo lo necesario antes de unir.
 * - Usa $unwind con preserveNullAndEmptyArrays: true si necesitas conservar documentos sin coincidencias.
 * - Evita traer arreglos gigantes: limita con $limit y $sort dentro del pipeline secundario.
 * - Mide performance con explain("executionStats") y revisa el uso de indices.
 */
