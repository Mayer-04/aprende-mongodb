// Cambiar a una base de datos (se crea automáticamente al guardar datos)
use tienda

// Ver en qué base de datos estás
db.getName()

// Ejemplo: crear la base de datos guardando un documento
db.productos.insertOne({ nombre: "Mouse", precio: 25 })

// Ahora sí aparece en la lista
show dbs

// Cambiar a otra base de datos
use escuela

// Esta NO aparecerá hasta que guardes algo
show dbs