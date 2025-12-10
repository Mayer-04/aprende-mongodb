// $push: agrega elementos al final de un arreglo

// Agregar una habilidad
db.usuarios.updateOne(
  { nombre: "Mayer" },
  { $push: { habilidades: "MongoDB" } }
)

// Insertar varios y ponerlos al inicio
db.usuarios.updateOne(
  { _id: ObjectId("...") },
  { $push: { tags: { $each: ["node", "backend"], $position: 0 } } }
)

// Guardar las ultimas 3 busquedas (recorta mientras empuja)
db.usuarios.updateOne(
  { _id: ObjectId("...") },
  { $push: { ultimasBusquedas: { $each: ["react"], $slice: -3 } } }
)

// Si no quieres duplicados, usa $addToSet en vez de $push
db.usuarios.updateOne(
  { nombre: "Mayer" },
  { $addToSet: { habilidades: "MongoDB" } }
)
