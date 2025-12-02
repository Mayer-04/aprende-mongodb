// Ordenar ascendente (A-Z, 0-9)
db.usuarios.find().sort({ nombre: 1 })

// Ordenar descendente (Z-A, 9-0)
db.usuarios.find().sort({ edad: -1 })

// Ordenar por múltiples campos
db.usuarios.find().sort({ ciudad: 1, edad: -1 })
// Primero por ciudad A-Z, luego por edad mayor a menor

// Top 5 usuarios más jóvenes
db.usuarios.find().sort({ edad: 1 }).limit(5)

// Top 5 usuarios más antiguos
db.usuarios.find().sort({ edad: -1 }).limit(5)

// Productos más caros
db.productos.find().sort({ precio: -1 })

// Combinar filtro, orden y límite
db.usuarios.find({ ciudad: "Bogotá" })
  .sort({ edad: -1 })
  .limit(10)

// Ordenar por fecha (más recientes primero)
db.usuarios.find().sort({ fechaRegistro: -1 })

// Ordenar alfabéticamente ignorando mayúsculas (usar índice con collation)
db.usuarios.find()
  .sort({ nombre: 1 })
  .collation({ locale: "es", strength: 2 })