// $gte: Mayor o igual que (greater than or equal)

// Usuarios con 18 años o más
db.usuarios.find({ edad: { $gte: 18 } })

// Productos con precio de 50 o más
db.productos.find({ precio: { $gte: 50 } })

// Stock de 10 unidades o más
db.productos.find({ stock: { $gte: 10 } })

// Con fechas: pedidos desde el 1 de enero de 2025
db.pedidos.find({ 
  fechaCreacion: { $gte: new Date("2025-01-01") } 
})

// Rango completo: entre 18 y 65 (inclusive)
db.usuarios.find({
  edad: { $gte: 18, $lte: 65 }
})

// Casos de uso reales:

// Usuarios mayores de edad (18 o más)
db.usuarios.find({ edad: { $gte: 18 } })

// Productos con inventario mínimo
db.productos.find({ stock: { $gte: 5 } })

// Calificaciones buenas (4 estrellas o más)
db.productos.find({ calificacion: { $gte: 4 } })

// Pedidos del mes actual
const inicioMes = new Date(2025, 0, 1)  // 1 de enero 2025
db.pedidos.find({ 
  fechaCreacion: { $gte: inicioMes } 
})

// Suscripciones activas
const hoy = new Date()
db.suscripciones.find({ 
  fechaVencimiento: { $gte: hoy } 
})

// Usuarios con nivel mínimo para acceso
db.usuarios.find({ nivel: { $gte: 5 } })

// Descuentos aplicables (compra mínima)
db.descuentos.find({ 
  compraMinima: { $gte: 100 } 
})

// Combinar con sort y limit
// Top 10 productos más caros (desde $100)
db.productos.find({ precio: { $gte: 100 } })
  .sort({ precio: -1 })
  .limit(10)

// Diferencia entre $gt y $gte:
db.usuarios.find({ edad: { $gt: 17 } })   // 18, 19, 20...
db.usuarios.find({ edad: { $gte: 18 } })  // 18, 19, 20... (mismo resultado)

db.usuarios.find({ edad: { $gt: 18 } })   // 19, 20, 21...
db.usuarios.find({ edad: { $gte: 18 } })  // 18, 19, 20... (diferente)