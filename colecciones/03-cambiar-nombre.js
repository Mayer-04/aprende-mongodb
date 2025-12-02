// Cambiar nombre de una colección
db.usuarios.renameCollection("clientes")

// Si "clientes" ya existe, dará error
// Para forzar el cambio y reemplazar:
db.usuarios.renameCollection("clientes", true)

// Verificar el cambio
show collections

// Ejemplo completo:
db.personas.insertOne({ nombre: "Mayer" })
show collections  // Aparece "personas"
db.personas.renameCollection("empleados")
show collections  // Ahora aparece "empleados"