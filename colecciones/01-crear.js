// Crear una colección vacía
db.createCollection("usuarios")

// MongoDB crea colecciones automáticamente al guardar datos
db.productos.insertOne({ nombre: "Laptop" })  // Crea "productos" si no existe

// Colección con límite de tamaño (útil para logs)
// Las colecciones `capped` eliminan automáticamente los datos más antiguos
db.createCollection("registros", { 
  capped: true,        // Tamaño fijo
  size: 10485760,      // 10 MB
  max: 1000            // Máximo 1000 documentos
})