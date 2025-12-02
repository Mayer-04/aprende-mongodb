// $lte: Menor o igual que (less than or equal)

// Usuarios con 30 años o menos
db.usuarios.find({ edad: { $lte: 30 } })

// Productos con precio de 50 o menos
db.productos.find({ precio: { $lte: 50 } })

// Stock de 10 unidades o menos
db.productos.find({ stock: { $lte: 10 } })

// Con fechas: pedidos hasta el 31 de diciembre de 2024
db.pedidos.find({ 
  fechaCreacion: { $lte: new Date("2024-12-31") } 
})

// Rango completo: entre 18 y 65 (inclusive)
db.usuarios.find({
  edad: { $gte: 18, $lte: 65 }
})

// Casos de uso reales:

// Productos económicos (50 o menos)
db.productos.find({ precio: { $lte: 50 } })

// Stock crítico (10 unidades o menos)
db.productos.find({ stock: { $lte: 10 } })

// Calificaciones regulares o bajas (3 estrellas o menos)
db.productos.find({ calificacion: { $lte: 3 } })

// Usuarios jóvenes (25 años o menos)
db.usuarios.find({ edad: { $lte: 25 } })

// Descuentos pequeños (20% o menos)
db.descuentos.find({ porcentaje: { $lte: 20 } })

// Pedidos con pocos productos (5 o menos)
db.pedidos.find({ cantidadProductos: { $lte: 5 } })

// Suscripciones vencidas o por vencer
db.suscripciones.find({ 
  fechaVencimiento: { $lte: new Date() } 
})

// Publicaciones recientes (últimos 7 días)
const hace7Dias = new Date()
hace7Dias.setDate(hace7Dias.getDate() - 7)
db.publicaciones.find({ 
  fechaCreacion: { $gte: hace7Dias, $lte: new Date() } 
})

// Niveles de acceso básico
db.usuarios.find({ nivel: { $lte: 3 } })

// Productos con descuento máximo
db.productos.find({ 
  precio: { $lte: 100 },
  enOferta: true
})

// Diferencia entre $lt y $lte:
db.usuarios.find({ edad: { $lt: 18 } })   // 0 a 17
db.usuarios.find({ edad: { $lte: 18 } })  // 0 a 18 (incluye 18)