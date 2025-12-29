// ==========================================
// Método limit()
// ==========================================
// Especifica el número máximo de documentos que el cursor retornará.
// Es fundamental para controlar el tamaño de los resultados y mejorar el rendimiento.
// Documentación: https://www.mongodb.com/docs/manual/reference/method/cursor.limit/

// ------------------------------------------
// 1. Uso básico
// ------------------------------------------

// Limitar la cantidad de resultados devueltos a 10.
// Si hay menos de 10 documentos, devolverá todos los disponibles.
db.usuarios.find().limit(10);

// Obtener solo el primer documento encontrado (equivalente a findOne, pero devuelve un cursor).
db.usuarios.find().limit(1);

// Nota: Un límite de 0 es equivalente a no establecer límite.
db.usuarios.find().limit(0); 

// ------------------------------------------
// 2. Casos de uso comunes
// ------------------------------------------

// Ejemplo: "Top 3 productos más caros".
// El orden es importante: primero ordenamos (sort) y luego limitamos.
db.productos.find()
  .sort({ precio: -1 }) // Orden descendente por precio
  .limit(3);

// Ejemplo: Combinar con filtros.
// Obtener máximo 20 usuarios que vivan en "Bogotá".
db.usuarios.find({ ciudad: "Bogotá" }).limit(20);

// ------------------------------------------
// 3. Limit con Proyección
// ------------------------------------------

// Obtener los primeros 5 usuarios mostrando solo su nombre y edad.
// Esto optimiza tanto la red (menos datos) como el procesamiento.
db.usuarios.find({}, { nombre: 1, edad: 1, _id: 0 })
  .limit(5);

// ------------------------------------------
// 4. Consideraciones
// ------------------------------------------

// Aunque pongas .limit() antes de .sort(), MongoDB optimiza la consulta
// y ejecuta el sort primero para garantizar resultados consistentes.
// Sin embargo, es buena práctica escribirlo en el orden lógico: find -> sort -> limit.
db.usuarios.find()
  .sort({ apellido: 1 })
  .limit(10);
