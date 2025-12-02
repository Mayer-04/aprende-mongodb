// Contar todos los documentos
db.usuarios.countDocuments()

// Contar con filtro
db.usuarios.countDocuments({ ciudad: "Bogotá" })

// Contar con rangos
db.usuarios.countDocuments({ 
  edad: { $gte: 18, $lte: 65 } 
})

// Contar con múltiples condiciones
db.usuarios.countDocuments({ 
  ciudad: "Medellín",
  activo: true 
})

// Estimación rápida (menos preciso pero más rápido)
db.usuarios.estimatedDocumentCount()

// Contar con límite de tiempo (timeout)
db.usuarios.countDocuments(
  { ciudad: "Cali" },
  { maxTimeMS: 5000 }  // Máximo 5 segundos
)

// Verificar si existe al menos un documento
db.usuarios.countDocuments({ email: "test@email.com" }, { limit: 1 })