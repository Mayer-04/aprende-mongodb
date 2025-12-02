// $where: ejecuta expresiones JavaScript para filtrar documentos
// Su uso no es muy recomendado por razones de rendimiento y seguridad

db.users.find({
  $where: function () {
    return this.name == "Mayer";
  }
})

// $where no puede usar índices, es lento en colecciones grandes
// Forma abreviada con string:
db.users.find({ $where: "this.name == 'Mayer'" })

// ALTERNATIVA RECOMENDADA: Usar operadores de consulta estándar
db.users.find({ name: "Mayer" })

// Ejemplo complejo con $where (comparar dos campos):
db.products.find({ $where: "this.price > this.cost * 2" })

// ALTERNATIVA con $expr (más rápido, puede usar índices):
db.products.find({ $expr: { $gt: ["$price", { $multiply: ["$cost", 2] }] } })