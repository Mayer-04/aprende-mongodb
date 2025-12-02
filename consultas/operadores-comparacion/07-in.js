// $in: Igual a cualquiera de los valores (como OR múltiple)

// Usuarios de Bogotá, Medellín o Cali
db.usuarios.find({ 
  ciudad: { $in: ["Bogotá", "Medellín", "Cali"] } 
})

// Productos con tamaño S, M o L
db.productos.find({ 
  talla: { $in: ["S", "M", "L"] } 
})

// Con números
db.usuarios.find({ 
  edad: { $in: [18, 25, 30, 35] } 
})

// Estados válidos de pedidos
db.pedidos.find({ 
  estado: { $in: ["pendiente", "procesando", "enviado"] } 
})

// Equivalente a múltiples OR:
// Estos son iguales:
db.usuarios.find({ ciudad: { $in: ["Bogotá", "Cali"] } })

db.usuarios.find({
  $or: [
    { ciudad: "Bogotá" },
    { ciudad: "Cali" }
  ]
})
// Pero $in es más corto y eficiente

// Con ObjectIds
db.usuarios.find({ 
  _id: { 
    $in: [
      ObjectId("507f1f77bcf86cd799439011"),
      ObjectId("507f191e810c19729de860ea")
    ] 
  } 
})

// Casos de uso reales:

// Categorías principales
db.productos.find({ 
  categoria: { $in: ["Electrónica", "Computadores", "Celulares"] } 
})

// Roles con permisos especiales
db.usuarios.find({ 
  rol: { $in: ["admin", "moderador", "editor"] } 
})

// Métodos de pago aceptados
db.pedidos.find({ 
  metodoPago: { $in: ["tarjeta", "PSE", "efectivo"] } 
})

// Prioridades altas
db.tareas.find({ 
  prioridad: { $in: ["alta", "urgente", "crítica"] } 
})

// Productos en promoción por colores
db.productos.find({ 
  color: { $in: ["rojo", "azul", "negro"] } 
})

// IDs específicos de productos
const productosDestacados = [
  ObjectId("..."),
  ObjectId("..."),
  ObjectId("...")
]
db.productos.find({ _id: { $in: productosDestacados } })

// Combinar con otros filtros
// Usuarios premium de ciudades principales
db.usuarios.find({
  ciudad: { $in: ["Bogotá", "Medellín", "Cali"] },
  tipo: "premium"
})

// Rangos específicos (alternativa a múltiples $or)
db.productos.find({ 
  stock: { $in: [0, 1, 2, 3, 4, 5] }  // Stock muy bajo
})

// Con arrays vacíos (no encuentra nada)
db.usuarios.find({ ciudad: { $in: [] } })  // No devuelve resultados