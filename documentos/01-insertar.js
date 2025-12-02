// Insertar un documento (MongoDB crea el _id automáticamente)
db.usuarios.insertOne({ 
  nombre: "Andrés", 
  apellido: "Prada", 
  edad: 28,
  ciudad: "Bogotá"
})

// Insertar un documento con _id personalizado
db.usuarios.insertOne({ 
  _id: "user001",
  nombre: "Diego", 
  edad: 25 
})

// Insertar múltiples documentos
db.usuarios.insertMany([
  { nombre: "Luis", edad: 30, ciudad: "Medellín" },
  { nombre: "María", edad: 22, ciudad: "Cali" },
  { nombre: "Pedro", edad: 35, ciudad: "Bogotá" }
])

// Insertar con fecha actual
db.usuarios.insertOne({
  nombre: "Mayer",
  edad: 25,
  ciudad: "Bogotá",
  fechaRegistro: new Date(),
  activo: true
})