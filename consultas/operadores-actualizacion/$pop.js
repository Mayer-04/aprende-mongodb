// $pop: saca el primer (-1) o ultimo (1) elemento de un arreglo

// Quitar la notificacion mas antigua (primer elemento)
db.usuarios.updateOne(
  { nombre: "Mayer" },
  { $pop: { notificaciones: -1 } }
)

// Quitar el historial mas reciente (ultimo elemento)
db.usuarios.updateOne(
  { nombre: "Mayer" },
  { $pop: { historial: 1 } }
)

// Eliminar el primer comentario de una lista
db.posts.updateOne(
  { slug: "guia-mongo" },
  { $pop: { comentarios: -1 } }
)

// Si necesitas quitar un valor especifico, usa $pull en lugar de $pop
db.usuarios.updateOne(
  { nombre: "Mayer" },
  { $pull: { notificaciones: "promo" } }
)
