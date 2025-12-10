// $set: agrega o actualiza campos sin tocar el resto del documento
db.usuarios.updateOne(
  { nombre: "Mayer" },
  { $set: { edad: 31, ciudad: "Medellin" } }
)

// Crea campos si no existen (ej. plan)
db.usuarios.updateOne(
  { email: "demo@mail.com" },
  { $set: { plan: "free" } }
)

// Cambiar un valor anidado sin reemplazar todo el objeto
db.usuarios.updateOne(
  { _id: ObjectId("...") },
  { $set: { "perfil.bio": "Aprendiendo MongoDB" } }
)

// Mala practica: no uses updateOne sin $set porque borras campos no incluidos
db.usuarios.updateOne(
  { nombre: "Ana" },
  { nombre: "Ana", edad: 30 }  // Esto reemplaza todo el documento
)

// Marcar email verificado y guardar fecha de verificacion
db.usuarios.updateOne(
  { email: "cliente@mail.com", emailVerificado: { $ne: true } },
  {
    $set: { emailVerificado: true, "perfil.estado": "activo" },
    $currentDate: { verificadoEn: true }  // Marca timestamp actual
  }
)

// Actualizar un item especifico dentro de un arreglo (arrayFilters)
db.usuarios.updateOne(
  { email: "cliente@mail.com" },
  { $set: { "direcciones.$[dir].principal": true } },
  { arrayFilters: [ { "dir.alias": "trabajo" } ] }
)

// Upsert: crea el documento si no existe, si existe solo actualiza los campos
db.config.updateOne(
  { clave: "app.theme" },
  { $set: { valor: "light", actualizadoPor: "admin" } },
  { upsert: true }
)

// Cambiar un campo solo si cumple condicion extra en el filtro
db.productos.updateOne(
  { sku: "TSHIRT-001", stock: { $lte: 5 } },  // Solo productos con stock bajo
  { $set: { estado: "reponer", prioridad: "alta" } }
)
