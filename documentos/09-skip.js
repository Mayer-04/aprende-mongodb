// Saltar los primeros `N` documentos
db.usuarios.find().skip(10)

// Paginación: mostrar 10 por página
// Página 1
db.usuarios.find().limit(10)

// Página 2
db.usuarios.find().skip(10).limit(10)

// Página 3
db.usuarios.find().skip(20).limit(10)

// Página 4
db.usuarios.find().skip(30).limit(10)

// Paginación con orden
db.usuarios.find()
  .sort({ fechaRegistro: -1 })
  .skip(20)
  .limit(10)

// Función de paginación reutilizable
function obtenerPagina(numeroPagina, tamañoPagina) {
  const saltar = (numeroPagina - 1) * tamañoPagina
  return db.usuarios.find()
    .skip(saltar)
    .limit(tamañoPagina)
}

// Usar la función
obtenerPagina(1, 10)  // Primera página, 10 resultados
obtenerPagina(3, 20)  // Tercera página, 20 resultados

// Nota: skip es lento con números grandes
// Para mejor rendimiento, usa filtros con _id:
db.usuarios.find({ _id: { $gt: ultimoIdVisto } }).limit(10)