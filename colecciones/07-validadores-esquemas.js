// Los validadores aseguran que los datos cumplan reglas

// Crear colección con validación
db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "edad", "email"],
      properties: {
        nombre: {
          bsonType: "string",
          description: "Debe ser texto"
        },
        edad: {
          bsonType: "int",
          minimum: 18,
          maximum: 120,
          description: "Debe ser número entre 18 y 120"
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
          description: "Debe ser email válido"
        },
        ciudad: {
          enum: ["Bogotá", "Medellín", "Cali", "Barranquilla"],
          description: "Solo estas ciudades permitidas"
        },
        activo: {
          bsonType: "bool"
        }
      }
    }
  },
  validationAction: "error"
})

// Esto funcionará:
db.usuarios.insertOne({
  nombre: "Carlos",
  edad: 25,
  email: "carlos@email.com",
  ciudad: "Bogotá"
})

// Esto fallará (edad menor a 18):
db.usuarios.insertOne({
  nombre: "Maria",
  edad: 15,
  email: "maria@email.com"
})

// Agregar validador a colección existente
db.runCommand({
  collMod: "productos",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "precio"],
      properties: {
        nombre: { bsonType: "string" },
        precio: { 
          bsonType: "number",
          minimum: 0
        }
      }
    }
  }
})

// Ver validadores actuales
db.getCollectionInfos({ name: "usuarios" })