// Buena práctica: Verificar en qué base de datos estás antes de eliminar
db.getName()

// Eliminar la base de datos actual
db.dropDatabase()

// Verificar que se eliminó
show dbs

// Ejemplo completo de eliminación segura:
use baseDatosPrueba
db.test.insertOne({ dato: "temporal" })
show dbs  // Aparece baseDatosPrueba
db.dropDatabase()
show dbs  // Ya no aparece