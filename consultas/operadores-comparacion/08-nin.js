// $nin: No está en la lista (not in - inverso de $in)

// Usuarios que NO son de Bogotá, Medellín ni Cali
db.usuarios.find({ 
  ciudad: { $nin: ["Bogotá", "Medellín", "Cali"] } 
})

// Productos que NO son talla S, M ni L
db.productos.find({ 
  talla: { $nin: ["S", "M", "L"] } 
})

// Excluir edades específicas
db.usuarios.find({ 
  edad: { $nin: [18, 25, 30] } 
})

// Estados NO deseados
db.pedidos.find({ 
  estado: { $nin: ["cancelado", "rechazado", "devuelto"] } 
})

// Equivalente a múltiples AND con $ne:
// Estos son similares:
db.usuarios.find({ ciudad: { $nin: ["Bogotá", "Cali"] } })

db.usuarios.find({
  ciudad: { $ne: "Bogotá" },
  ciudad: { $ne: "Cali" }  // ❌ Esto NO funciona así
})
// $nin es la forma correcta para múltiples exclusiones

// Casos de uso reales:

// Excluir categorías no deseadas
db.productos.find({ 
  categoria: { $nin: ["Adultos", "Restringido"] } 
})

// Usuarios sin roles especiales
db.usuarios.find({ 
  rol: { $nin: ["admin", "moderador"] } 
})

// Métodos de pago no aceptados
db.configuracion.find({ 
  metodoPago: { $nin: ["cheque", "contrareembolso"] } 
})

// Excluir estados finalizados
db.tareas.find({ 
  estado: { $nin: ["completado", "cancelado", "archivado"] } 
})

// Productos disponibles (excluir agotados)
db.productos.find({ 
  estado: { $nin: ["agotado", "descontinuado"] } 
})

// Excluir IDs específicos
const productosExcluidos = [
  ObjectId("507f1f77bcf86cd799439011"),
  ObjectId("507f191e810c19729de860ea")
]
db.productos.find({ _id: { $nin: productosExcluidos } })

// Combinar con otros filtros
// Productos activos que no son de ciertas categorías
db.productos.find({
  activo: true,
  categoria: { $nin: ["Usado", "Defectuoso"] }
})

// Usuarios registrados que no son de prueba
db.usuarios.find({ 
  email: { $nin: ["test@test.com", "demo@demo.com", "prueba@test.com"] } 
})

// Importante: $nin también incluye documentos donde el campo no existe
db.usuarios.find({ ciudad: { $nin: ["Bogotá"] } })
// Devuelve usuarios de otras ciudades Y usuarios sin campo ciudad

// Para excluir solo valores (no la ausencia del campo):
db.usuarios.find({
  ciudad: { $exists: true, $nin: ["Bogotá", "Cali"] }
})

// Diferencia entre $ne y $nin:
db.usuarios.find({ ciudad: { $ne: "Bogotá" } })      // Diferente de UN valor
db.usuarios.find({ ciudad: { $nin: ["Bogotá"] } })   // No está en UNA lista