// Ver todos los índices de una colección
// Toda colección tiene un índice automático en `_id`
db.usuarios.getIndexes()

// Eliminar un índice específico (por nombre)
db.usuarios.dropIndex("email_1")

// Eliminar todos los índices excepto `_id`
db.usuarios.dropIndexes()

// Ver el tamaño que ocupan los índices
db.usuarios.totalIndexSize()

// Ejemplo completo:
db.productos.createIndex({ nombre: 1 })
db.productos.createIndex({ precio: -1 })
db.productos.getIndexes()  // Muestra: _id, nombre_1, precio_-1
db.productos.dropIndex("precio_-1")
db.productos.getIndexes()  // Muestra: _id, nombre_1

// Ver si MongoDB usa un índice en una consulta
db.productos.find({ nombre: "Laptop" }).explain("executionStats")