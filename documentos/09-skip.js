// ==========================================
// Método skip()
// ==========================================
// Controla cuántos documentos saltar (omitir) antes de empezar a devolver resultados.
// Se usa principalmente junto con .limit() para implementar paginación.

// ------------------------------------------
// 1. Uso básico
// ------------------------------------------

// Saltar los primeros 10 documentos y devolver el resto.
db.usuarios.find().skip(10);

// ------------------------------------------
// 2. Paginación Clásica (Offset-based)
// ------------------------------------------
// Fórmula: skip = (número_pagina - 1) * elementos_por_pagina

// Página 1: Mostrar primeros 10
db.usuarios.find().limit(10);
// o explícitamente:
db.usuarios.find().skip(0).limit(10);

// Página 2: Saltar 10, mostrar siguientes 10
db.usuarios.find().skip(10).limit(10);

// Página 3: Saltar 20, mostrar siguientes 10
db.usuarios.find().skip(20).limit(10);

// ------------------------------------------
// 3. Paginación con Ordenamiento
// ------------------------------------------
// Para que la paginación sea consistente, SIEMPRE se debe garantizar un orden determinista.
// Ejemplo: Usuarios más recientes, página 3 (elementos 21-30).
db.usuarios
  .find()
  .sort({ fechaRegistro: -1, _id: 1 }) // _id como desempate para garantizar orden único
  .skip(20)
  .limit(10);

// ------------------------------------------
// 4. Función de utilidad para paginación
// ------------------------------------------

/**
 * Genera una consulta paginada.
 * @param {number} numeroPagina - El número de página actual (empieza en 1).
 * @param {number} tamanoPagina - Cantidad de documentos por página.
 */
function obtenerPaginaUsuarios(numeroPagina, tamanoPagina) {
  if (numeroPagina < 1) numeroPagina = 1;
  const saltar = (numeroPagina - 1) * tamanoPagina;

  return db.usuarios
    .find()
    .sort({ _id: 1 }) // Orden por defecto
    .skip(saltar)
    .limit(tamanoPagina);
}

// Uso:
// obtenerPaginaUsuarios(1, 10);  // Página 1
// obtenerPaginaUsuarios(3, 20);  // Página 3 con 20 items
