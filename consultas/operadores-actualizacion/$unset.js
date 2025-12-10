// $unset: borra campos (desaparecen, no quedan en null)

// Quitar un token temporal
db.usuarios.updateOne(
  { email: "mayer@mail.com" },
  { $unset: { tempToken: "" } }
)

// Limpiar varios campos de usuarios dados de baja
db.usuarios.updateMany(
  { dadoDeBaja: true },
  { $unset: { telefono: "", correoAlterno: "" } }
)

// Remover dato sensible en un pedido
db.pedidos.updateOne(
  { _id: ObjectId("...") },
  { $unset: { tarjetaUltimos4: "" } }
)

// Si solo quieres vaciarlo, mejor deja el campo en null
db.usuarios.updateOne(
  { email: "mayer@mail.com" },
  { $set: { telefono: null } }
)

// Nunca intentes borrar _id, es obligatorio en cada documento
