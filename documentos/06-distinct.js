// Obtener valores únicos de un campo
db.usuarios.distinct("ciudad")
// Resultado: ["Bogotá", "Medellín", "Cali"]

// Valores únicos con filtro
db.usuarios.distinct("ciudad", { edad: { $gte: 25 } })

// Edades únicas de usuarios activos
db.usuarios.distinct("edad", { activo: true })

// Categorías únicas de productos baratos
db.productos.distinct("categoria", { precio: { $lt: 50 } })

// Contar cuántos valores únicos hay
db.usuarios.distinct("ciudad").length

// Valores únicos en arrays
db.productos.distinct("etiquetas")  // Todas las etiquetas únicas