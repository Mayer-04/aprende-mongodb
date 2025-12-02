// AND: TODAS las condiciones deben cumplirse
// Por defecto, MongoDB usa AND implícito

// AND implícito (forma común)
// Resultado: usuarios de Bogotá Y mayores de edad
db.usuarios.find({
  ciudad: "Bogotá",
  edad: { $gte: 18 }
})

// AND explícito (cuando necesitas condiciones complejas)
db.usuarios.find({
  $and: [
    { ciudad: "Bogotá" },
    { edad: { $gte: 18 } }
  ]
})

// Cuándo usar $and explícito:
// Cuando tienes múltiples condiciones sobre el mismo campo

// Edad entre 18 y 65
db.usuarios.find({
  $and: [
    { edad: { $gte: 18 } },
    { edad: { $lte: 65 } }
  ]
})

// Precio entre 50 y 200
db.productos.find({
  $and: [
    { precio: { $gte: 50 } },
    { precio: { $lte: 200 } }
  ]
})

// Combinar AND con OR
// (Bogotá O Medellín) Y mayores de edad
db.usuarios.find({
  $and: [
    {
      $or: [
        { ciudad: "Bogotá" },
        { ciudad: "Medellín" }
      ]
    },
    { edad: { $gte: 18 } }
  ]
})

// Múltiples condiciones AND
db.usuarios.find({
  ciudad: "Cali",
  edad: { $gte: 25 },
  activo: true,
  email: { $exists: true }
})

// AND con arrays
db.productos.find({
  categoria: "Electrónica",
  etiquetas: { $all: ["oferta", "envioGratis"] }
})