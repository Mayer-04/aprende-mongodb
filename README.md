# Aprende MongoDB

Este repo es una colección de comandos cortos para aprender MongoDB desde la consola. Cada archivo `.js` está comentado para que copies y pegues en tu `mongosh` y veas qué pasa. No hay configuraciones raras ni instalaciones extra explicadas aquí: la idea es que ya tengas acceso a una consola de MongoDB y solo quieras ejemplos listos.

## Qué encontrarás

- `base-datos/`: crear, listar y borrar bases de datos.
- `colecciones/`: crear colecciones, renombrar, eliminar, poner índices y validadores.
- `documentos/`: CRUD de documentos, paginación (`limit`, `skip`), `distinct` y conteos.
- `consultas/`: operadores de comparación, lógicos, arrays, elementos, actualización, `$regex`, `$where` y `$lookup` para unir colecciones.

## Buenas prácticas que aparecen en los ejemplos

- Usa nombres claros en bases y colecciones; evita espacios y mayúsculas innecesarias.
- Añade validadores de esquema cuando puedas (`colecciones/07-validadores-esquemas.js`).
- Crea índices en campos que consultes seguido (`colecciones/05-crear-indice.js`).
- Actualiza con operadores (`$set`, `$push`, `$inc`) en vez de reemplazar documentos completos.
- Proyecta y limita resultados para no traer datos de más.

## ¿Quieres aportar?

Adelante. Si notas que falta un operador, un caso de uso o ves un error, envía un **PR** con un archivo corto y comentado en la carpeta que corresponda.
