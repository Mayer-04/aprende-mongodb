// Los índices hacen las búsquedas más rápidas
// 1 = orden ascendente (A-Z, 0-9)
// -1 = orden descendente (Z-A, 9-0)

// Índice simple en un campo
db.usuarios.createIndex({ email: 1 })

// Índice único (no permite emails repetidos)
db.usuarios.createIndex({ email: 1 }, { unique: true })

// Índice compuesto (buscar por apellido y edad)
db.usuarios.createIndex({ apellido: 1, edad: -1 })

// Índice para búsqueda de texto
db.productos.createIndex({ descripcion: "text", nombre: "text" })

// Usar el índice de texto
db.productos.find({ $text: { $search: "laptop gamer" } })

// Índice que expira documentos automáticamente (útil para sesiones)
db.sesiones.createIndex(
  { fechaCreacion: 1 }, 
  { expireAfterSeconds: 3600 }  // Elimina después de 1 hora
)

// Índice parcial (solo indexa documentos que cumplan condición)
db.usuarios.createIndex(
  { edad: 1 },
  { partialFilterExpression: { edad: { $gte: 18 } } }
)