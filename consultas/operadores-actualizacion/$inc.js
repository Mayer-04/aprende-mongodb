// $inc: suma o resta numeros sin reescribir el documento

// Contador de visitas (suma 1)
db.articulos.updateOne(
  { slug: "guia-mongo" },
  { $inc: { vistas: 1 } }
)

// Bajar stock solo si queda inventario (resta 1)
db.productos.updateOne(
  { sku: "TSHIRT-001", stock: { $gte: 1 } },
  { $inc: { stock: -1 } }
)

// Agregar puntos a un usuario
db.usuarios.updateOne(
  { email: "mayer@mail.com" },
  { $inc: { puntos: 50 } }
)

// Si el campo no existe, $inc lo crea con el valor indicado
db.usuarios.updateOne(
  { email: "nuevo@mail.com" },
  { $inc: { visitas: 1 } }
)

// Mala practica: no uses $inc en campos de texto
db.usuarios.updateOne(
  { email: "mayer@mail.com" },
  { $inc: { telefono: 1 } }  // telefono no es un numero
)
