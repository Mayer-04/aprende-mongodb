// $exists - Verifica si un campo existe o no en el documento

// Usuarios que tienen email registrado
db.usuarios.find({ email: { $exists: true } })

// Usuarios que NO tienen email
db.usuarios.find({ email: { $exists: false } })

// Productos con descripción
db.productos.find({ descripcion: { $exists: true } })

// Documentos con campo opcional presente
db.usuarios.find({ 
  telefono: { $exists: true },
  telefono: { $ne: null }  // Existe Y no es null
})

// Combinar exists con otras condiciones
// Usuarios activos que tienen email
db.usuarios.find({
  activo: true,
  email: { $exists: true }
})

// Encontrar documentos incompletos
// Productos sin precio o sin stock
db.productos.find({
  $or: [
    { precio: { $exists: false } },
    { stock: { $exists: false } }
  ]
})

// Verificar campos anidados
db.usuarios.find({ "direccion.ciudad": { $exists: true } })

// Diferencia entre $exists y null:
db.usuarios.find({ email: null })          // email no existe O es null
db.usuarios.find({ email: { $exists: false } })  // email NO existe
db.usuarios.find({ email: { $exists: true, $ne: null } })  // email existe Y no es null

// Casos de uso reales:

// Migración de datos: encontrar documentos sin campo nuevo
db.usuarios.find({ fechaActualizacion: { $exists: false } })

// Validación: documentos que necesitan completarse
db.perfiles.find({
  $or: [
    { foto: { $exists: false } },
    { biografia: { $exists: false } },
    { telefono: { $exists: false } }
  ]
})