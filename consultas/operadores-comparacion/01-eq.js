// $eq: Igual a (equivale a no usar operador)
// Nota: Para la mayoría de casos, usa la forma simple sin $eq

// Usuarios con edad igual a 25
db.usuarios.find({ edad: { $eq: 25 } })

// Forma abreviada (más común):
db.usuarios.find({ edad: 25 })

// Ambas consultas son idénticas

// Con texto
db.usuarios.find({ ciudad: { $eq: "Bogotá" } })
db.usuarios.find({ ciudad: "Bogotá" })  // Más simple

// Con booleanos
db.usuarios.find({ activo: { $eq: true } })
db.usuarios.find({ activo: true })

// Con null
db.usuarios.find({ telefono: { $eq: null } })
db.usuarios.find({ telefono: null })

// Cuándo usar $eq explícito:
// Útil cuando construyes consultas dinámicamente

const operador = "$eq"
const valor = 25
db.usuarios.find({ edad: { [operador]: valor } })

// Comparar con ObjectId
db.usuarios.find({ _id: { $eq: ObjectId("507f1f77bcf86cd799439011") } })

// Con fechas
db.pedidos.find({ 
  fechaCreacion: { $eq: new Date("2025-01-15") } 
})