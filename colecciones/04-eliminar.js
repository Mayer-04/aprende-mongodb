// Eliminar una colección completa (todos sus datos e índices)
// Devuelve true si se eliminó, false si no existía
db.usuarios.drop()

// Verificar que la colección se eliminó
show collections

// Ejemplo completo:
db.temporal.insertOne({ prueba: 1 })
show collections
db.temporal.drop()
show collections  // Ya no aparece

// Alternativa más explícita (mismo resultado)
db.getCollection("usuarios").drop()