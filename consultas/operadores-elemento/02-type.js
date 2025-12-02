// $type - Verifica el tipo de dato de un campo

// Documentos donde ciudad es texto
db.usuarios.find({ ciudad: { $type: "string" } })

// Documentos donde edad es número entero
db.usuarios.find({ edad: { $type: "int" } })

// Tipos de datos comunes en MongoDB:

// "string" - Texto
db.usuarios.find({ nombre: { $type: "string" } })

// "int" - Número entero (32 bits)
db.productos.find({ stock: { $type: "int" } })

// "long" - Número entero (64 bits)
db.estadisticas.find({ visitas: { $type: "long" } })

// "double" - Número decimal
db.productos.find({ precio: { $type: "double" } })

// "number" - Cualquier tipo numérico (int, long, double, decimal)
db.productos.find({ precio: { $type: "number" } })

// "bool" - Verdadero o falso
db.usuarios.find({ activo: { $type: "bool" } })

// "date" - Fecha
db.usuarios.find({ fechaRegistro: { $type: "date" } })

// "array" - Lista de valores
db.productos.find({ etiquetas: { $type: "array" } })

// "object" - Objeto anidado
db.usuarios.find({ direccion: { $type: "object" } })

// "null" - Valor nulo
db.usuarios.find({ telefono: { $type: "null" } })

// "objectId" - ID de MongoDB
db.usuarios.find({ _id: { $type: "objectId" } })

// Usar códigos numéricos (alternativa):
db.usuarios.find({ edad: { $type: 16 } })  // 16 = int
db.usuarios.find({ precio: { $type: 1 } })  // 1 = double

// Buscar múltiples tipos
db.productos.find({ 
  precio: { 
    $type: ["int", "double", "long"] 
  } 
})

// Casos de uso reales:

// Encontrar datos inconsistentes
// Buscar edades guardadas como texto (error común)
db.usuarios.find({ edad: { $type: "string" } })

// Validar tipos después de importar datos
db.productos.find({ 
  $or: [
    { precio: { $type: "string" } },    // Precio como texto (error)
    { stock: { $type: "string" } }      // Stock como texto (error)
  ]
})

// Buscar campos con tipo incorrecto para corrección
db.usuarios.find({ 
  telefono: { $type: "number" }  // Teléfono debería ser string
})

// Combinar con exists
// Documentos donde email existe Y es string
db.usuarios.find({
  email: { 
    $exists: true,
    $type: "string" 
  }
})

// Diferencia entre null y ausencia de campo:
db.usuarios.find({ email: { $type: "null" } })       // email existe pero es null
db.usuarios.find({ email: { $exists: false } })      // email no existe