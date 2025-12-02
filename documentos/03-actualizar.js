// Actualizar un documento (solo los campos especificados)
db.usuarios.updateOne(
  { nombre: "Luis" },
  { $set: { edad: 29, ciudad: "Cali" } }
)

// Actualizar múltiples documentos
db.usuarios.updateMany(
  { ciudad: "Medellín" },
  { $set: { ciudad: "Cali" } }
)

// Reemplazar documento completo (borra campos no mencionados)
db.usuarios.replaceOne(
  { nombre: "Luis" },
  { nombre: "Luis", edad: 30, ciudad: "Bogotá" }
)

// Operadores útiles:

// $set: agregar o actualizar campos
db.usuarios.updateOne(
  { nombre: "Mayer" },
  { $set: { telefono: "3001234567", activo: true } }
)

// $unset: eliminar campos
db.usuarios.updateOne(
  { nombre: "Mayer" },
  { $unset: { telefono: "" } }
)

// $inc: incrementar números
db.productos.updateOne(
  { nombre: "Laptop" },
  { $inc: { stock: -1, ventas: 1 } }  // Resta 1 al stock, suma 1 a ventas
)

// $mul: multiplicar
db.productos.updateOne(
  { nombre: "Mouse" },
  { $mul: { precio: 1.1 } }  // Aumenta precio 10%
)

// $rename: cambiar nombre de campo
db.usuarios.updateMany(
  {},
  { $rename: { "nombre": "name" } }
)

// $min: actualizar solo si el nuevo valor es menor
db.productos.updateOne(
  { nombre: "Teclado" },
  { $min: { precio: 50 } }  // Solo actualiza si 50 es menor al actual
)

// $max: actualizar solo si el nuevo valor es mayor
db.productos.updateOne(
  { nombre: "Mouse" },
  { $max: { precio: 30 } }  // Solo actualiza si 30 es mayor al actual
)

// Arrays: $push agregar elemento
db.usuarios.updateOne(
  { nombre: "Luis" },
  { $push: { hobbies: "fútbol" } }
)

// $pull: eliminar elemento del array
db.usuarios.updateOne(
  { nombre: "Luis" },
  { $pull: { hobbies: "fútbol" } }
)

// $addToSet: agregar solo si no existe
db.usuarios.updateOne(
  { nombre: "Luis" },
  { $addToSet: { hobbies: "natación" } }
)

// $pop: eliminar primer (-1) o último (1) elemento
db.usuarios.updateOne(
  { nombre: "Luis" },
  { $pop: { hobbies: 1 } }
)

// Actualizar o insertar si no existe (upsert)
db.usuarios.updateOne(
  { email: "nuevo@email.com" },
  { $set: { nombre: "Nuevo", edad: 25 } },
  { upsert: true }
)

// $currentDate: agregar fecha actual
db.usuarios.updateOne(
  { nombre: "Luis" },
  { $currentDate: { ultimaModificacion: true } }
)