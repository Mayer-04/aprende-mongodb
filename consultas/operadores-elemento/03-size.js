// $size - Verifica la cantidad de elementos en un array
// Limitación: $size NO acepta rangos

// Productos con exactamente 3 etiquetas
db.productos.find({ etiquetas: { $size: 3 } })

// Usuarios con 2 números de teléfono
db.usuarios.find({ telefonos: { $size: 2 } })

// Arrays vacíos
db.productos.find({ imagenes: { $size: 0 } })

// Un solo elemento en el array
db.usuarios.find({ hobbies: { $size: 1 } })

// O usar aggregation:
db.productos.aggregate([
  {
    $match: {
      $expr: { $gte: [{ $size: "$etiquetas" }, 3] }
    }
  }
])

// Casos de uso reales:

// Pedidos con exactamente 5 productos
db.pedidos.find({ productos: { $size: 5 } })

// Publicaciones sin comentarios
db.publicaciones.find({ comentarios: { $size: 0 } })

// Validar datos: usuarios con múltiples roles
db.usuarios.find({ roles: { $size: 2 } })

// Combinar con otros operadores
// Productos con 3 etiquetas Y en oferta
db.productos.find({
  etiquetas: { $size: 3 },
  enOferta: true
})

// Arrays vs no-arrays
db.productos.find({ 
  etiquetas: { 
    $exists: true,
    $type: "array",
    $size: { $gte: 1 }  // Esto da error
  }
})

// Verificar si es array vacío o no existe
db.productos.find({
  $or: [
    { etiquetas: { $exists: false } },
    { etiquetas: { $size: 0 } }
  ]
})