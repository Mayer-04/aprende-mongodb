// Ver todas las colecciones (como las "tablas" en sql)
show collections

// Nombre de la base de datos actual
db.getName()

// Información detallada: tamaño, cantidad de datos, etc.
db.stats()

// Tamaño en megabytes (más fácil de leer)
db.stats(1024 * 1024)

// Ver qué versión de MongoDB tienes
db.version()

// Información de una colección específica
db.productos.stats()

// Contar cuántos documentos hay en una colección
db.productos.countDocuments()