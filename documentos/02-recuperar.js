// Recuperar todos los documentos
db.usuarios.find()

// Recuperar un solo documento
db.usuarios.findOne()

// Buscar por campo específico
db.usuarios.find({ ciudad: "Bogotá" })

// Buscar con comparadores
db.usuarios.find({ edad: { $gte: 25 } })  // Mayor o igual a 25
db.usuarios.find({ edad: { $lt: 30 } })   // Menor a 30
db.usuarios.find({ edad: { $ne: 25 } })   // Diferente de 25

// Buscar con múltiples condiciones (AND)
db.usuarios.find({ 
  ciudad: "Bogotá", 
  edad: { $gte: 18 } 
})

// Buscar con OR
db.usuarios.find({ 
  $or: [
    { ciudad: "Bogotá" },
    { ciudad: "Medellín" }
  ]
})

// Mostrar solo ciertos campos (proyección)
db.usuarios.find(
  { ciudad: "Bogotá" },
  { nombre: 1, edad: 1, _id: 0 }  // 1=mostrar, 0=ocultar
)

// Excluir campos
db.usuarios.find({}, { contraseña: 0 })  // Muestra todo menos contraseña

// Buscar en arrays
db.productos.find({ etiquetas: "oferta" })  // Si contiene "oferta"
db.productos.find({ etiquetas: { $all: ["oferta", "nuevo"] } })  // Contiene ambos

// Buscar documentos que tienen un campo
db.usuarios.find({ email: { $exists: true } })

// Buscar por tipo de dato
db.usuarios.find({ edad: { $type: "int" } })

// Buscar con expresiones regulares (like en SQL)
db.usuarios.find({ nombre: /^Car/ })  // Nombres que empiezan con "Car"
db.usuarios.find({ email: /@gmail\.com$/ })  // Emails de Gmail