// NOT: Niega UNA condición específica
// Encuentra documentos que NO cumplan la condición

// Usuarios cuya edad NO sea mayor o igual a 30
// Resultado: usuarios menores de 30
db.usuarios.find({
  edad: { $not: { $gte: 30 } }
})

// Productos cuyo precio NO sea menor a 100
// Resultado: productos de 100 o más
db.productos.find({
  precio: { $not: { $lt: 100 } }
})

// NOT con expresiones regulares
// Nombres que NO empiecen con "A"
db.usuarios.find({
  nombre: { $not: /^A/ }
})

// NOT con múltiples operadores
// Edad que NO esté entre 18 y 65
db.usuarios.find({
  edad: { 
    $not: { 
      $gte: 18, 
      $lte: 65 
    } 
  }
})

// Diferente de ($ne) vs NOT
// Estas dos son equivalentes:
db.usuarios.find({ ciudad: { $ne: "Cali" } })
db.usuarios.find({ ciudad: { $not: { $eq: "Cali" } } })

// Pero $ne es más simple y común
// Usa $not cuando necesites negar operadores complejos

// NOT con campos que no existen
// Documentos donde el campo "email" NO existe o NO cumple condición
db.usuarios.find({
  email: { $not: { $exists: true } }
})

// Combinar NOT con AND
db.usuarios.find({
  activo: true,
  edad: { $not: { $lt: 18 } }  // Activos y NO menores de edad
})