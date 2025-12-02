// $gt: Mayor que (greater than)

// Usuarios con más de 25 años
db.usuarios.find({ edad: { $gt: 25 } })

// Productos con precio mayor a 100
db.productos.find({ precio: { $gt: 100 } })

// Stock mayor a 50 unidades
db.productos.find({ stock: { $gt: 50 } })

// Con fechas: pedidos después del 1 de enero de 2025
db.pedidos.find({ 
  fechaCreacion: { $gt: new Date("2025-01-01") } 
})

// Combinar con otros operadores
// Edad mayor a 18 Y menor a 65
db.usuarios.find({
  edad: { $gt: 18, $lt: 65 }
})

// Casos de uso reales:

// Productos caros
db.productos.find({ precio: { $gt: 1000 } })

// Usuarios mayores de edad
db.usuarios.find({ edad: { $gt: 17 } })  // Mayor a 17 = 18 o más

// Pedidos grandes (más de 5 productos)
db.pedidos.find({ cantidadProductos: { $gt: 5 } })

// Publicaciones con muchos likes
db.publicaciones.find({ likes: { $gt: 100 } })

// Eventos futuros
db.eventos.find({ 
  fecha: { $gt: new Date() }  // Mayor a la fecha actual
})

// Productos con stock crítico superado
db.productos.find({ stock: { $gt: 10 } })

// Combinar con proyección
db.usuarios.find(
  { edad: { $gt: 30 } },
  { nombre: 1, edad: 1, _id: 0 }
)

// Con ordenamiento
db.productos.find({ precio: { $gt: 50 } })
  .sort({ precio: 1 })
  .limit(10)