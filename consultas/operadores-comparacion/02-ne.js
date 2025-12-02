// $ne: No igual a (diferente de)

// Usuarios con edad diferente de 25
db.usuarios.find({ edad: { $ne: 25 } })

// Usuarios que NO son de Bogotá
db.usuarios.find({ ciudad: { $ne: "Bogotá" } })

// Usuarios NO activos
db.usuarios.find({ activo: { $ne: true } })

// Productos con stock diferente de 0
db.productos.find({ stock: { $ne: 0 } })

// Excluir valores nulos
// Devuelve documentos donde email existe Y no es null
db.usuarios.find({ email: { $ne: null } })

// Combinar múltiples $ne
db.usuarios.find({
  edad: { $ne: 18 },
  ciudad: { $ne: "Bogotá" }
})

// Casos de uso reales:

// Productos disponibles (stock diferente de 0)
db.productos.find({ stock: { $ne: 0 } })

// Usuarios sin rol de admin
db.usuarios.find({ rol: { $ne: "admin" } })

// Pedidos que no están cancelados
db.pedidos.find({ estado: { $ne: "cancelado" } })

// Publicaciones no eliminadas
db.publicaciones.find({ eliminado: { $ne: true } })

// Importante: $ne también incluye documentos donde el campo no existe
// Devuelve usuarios con edad ≠ 25 Y usuarios sin campo edad
db.usuarios.find({ edad: { $ne: 25 } })

// Para excluir solo el valor (no la ausencia del campo):
db.usuarios.find({
  edad: { $exists: true, $ne: 25 }
})