// Limitar cantidad de resultados
db.usuarios.find().limit(10)

// Primeros 5 usuarios
db.usuarios.find().limit(5)

// Top 3 más caros
db.productos.find().sort({ precio: -1 }).limit(3)

// Combinar con filtro
db.usuarios.find({ ciudad: "Bogotá" }).limit(20)

// El orden importa: sort antes de limit
db.usuarios.find()
  .sort({ edad: -1 })
  .limit(10)

// Limit con proyección (mostrar solo ciertos campos)
db.usuarios.find({}, { nombre: 1, edad: 1 })
  .limit(5)