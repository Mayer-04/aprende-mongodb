// OR: Al menos UNA condición debe cumplirse
// Encuentra documentos que cumplan cualquiera de las condiciones

// Usuarios de Cali O mayores de 50 años
db.usuarios.find({
  $or: [
    { ciudad: "Cali" },
    { edad: { $gte: 50 } }
  ]
})

// Productos en oferta O con stock bajo
db.productos.find({
  $or: [
    { enOferta: true },
    { stock: { $lt: 10 } }
  ]
})

// Múltiples condiciones OR (3 o más)
db.usuarios.find({
  $or: [
    { ciudad: "Bogotá" },
    { ciudad: "Medellín" },
    { ciudad: "Cali" }
  ]
})

// Combinar OR con otras condiciones
// Usuarios activos Y (de Cali O mayores de 50)
db.usuarios.find({
  activo: true,
  $or: [
    { ciudad: "Cali" },
    { edad: { $gte: 50 } }
  ]
})

// OR con rangos
db.productos.find({
  $or: [
    { precio: { $lt: 20 } },        // Muy baratos
    { precio: { $gt: 1000 } }       // Muy caros
  ]
})