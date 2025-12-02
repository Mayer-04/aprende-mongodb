// Eliminar un documento
db.usuarios.deleteOne({ nombre: "Andrés" })

// Eliminar múltiples documentos
db.usuarios.deleteMany({ edad: { $lt: 18 } })

// Eliminar todos los documentos de la colección
db.usuarios.deleteMany({})

// Eliminar y obtener el documento eliminado
db.usuarios.findOneAndDelete({ nombre: "Mayer" })

// Eliminar con múltiples condiciones
db.usuarios.deleteMany({ 
  ciudad: "Bogotá",
  activo: false 
})