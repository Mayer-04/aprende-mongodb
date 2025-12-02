// $lt: Menor que (less than)

// Usuarios menores de 30 años
db.usuarios.find({ edad: { $lt: 30 } })

// Productos con precio menor a 50
db.productos.find({ precio: { $lt: 50 } })

// Stock menor a 10 unidades (bajo)
db.productos.find({ stock: { $lt: 10 } })

// Con fechas: pedidos antes del 1 de enero de 2025
db.pedidos.find({ 
  fechaCreacion: { $lt: new Date("2025-01-01") } 
})

// Combinar con otros operadores
// Edad mayor a 18 Y menor a 30
db.usuarios.find({
  edad: { $gt: 18, $lt: 30 }
})

// Casos de uso reales:

// Productos en oferta (precios bajos)
db.productos.find({ precio: { $lt: 20 } })

// Usuarios menores de edad
db.usuarios.find({ edad: { $lt: 18 } })

// Stock bajo (alerta de reposición)
db.productos.find({ stock: { $lt: 5 } })

// Calificaciones bajas
db.productos.find({ calificacion: { $lt: 3 } })

// Pedidos pequeños (menos de 3 productos)
db.pedidos.find({ cantidadProductos: { $lt: 3 } })

// Eventos pasados
db.eventos.find({ 
  fecha: { $lt: new Date() }  // Menor a la fecha actual
})

// Publicaciones con pocos likes
db.publicaciones.find({ likes: { $lt: 10 } })

// Suscripciones próximas a vencer (menos de 30 días)
const dentro30Dias = new Date()
dentro30Dias.setDate(dentro30Dias.getDate() + 30)
db.suscripciones.find({ 
  fechaVencimiento: { $lt: dentro30Dias } 
})

// Combinar con sort
// Productos más baratos
db.productos.find({ precio: { $lt: 100 } })
  .sort({ precio: 1 })
  .limit(10)

// Rango específico
// Adultos jóvenes (18 a 29 años)
db.usuarios.find({
  edad: { $gte: 18, $lt: 30 }
})