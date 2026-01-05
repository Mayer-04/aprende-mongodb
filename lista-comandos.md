# Referencia Rápida de MongoDB

Mis comandos y operadores más utilizados en MongoDB Shell (`mongosh`).

---

## Comandos de Shell

| Comando | Descripción |
| ------------ | ------------- |
| `use <db>` | Cambiar o crear base de datos |
| `show dbs` | Listar bases de datos |
| `show collections` | Listar colecciones |
| `db` | Ver base de datos actual |
| `db.dropDatabase()` | Eliminar base de datos actual |
| `db.coleccion.drop()` | Eliminar una colección |
| `db.coleccion.getIndexes()` | Ver índices de una colección |
| `db.coleccion.createIndex({ campo: 1 })` | Crear índice (`1` asc, `-1` desc) |

---

## Operadores de Comparación

| Operador | Descripción | Ejemplo |
| -------- | ----------- | ------- |
| `$eq` | Igual a | `{ edad: { $eq: 25 } }` |
| `$ne` | Diferente de | `{ status: { $ne: "inactive" } }` |
| `$gt` | Mayor que | `{ precio: { $gt: 100 } }` |
| `$gte` | Mayor o igual | `{ stock: { $gte: 10 } }` |
| `$lt` | Menor que | `{ edad: { $lt: 18 } }` |
| `$lte` | Menor o igual | `{ rating: { $lte: 3 } }` |
| `$in` | Está en la lista | `{ color: { $in: ["rojo", "azul"] } }` |
| `$nin` | No está en la lista | `{ tipo: { $nin: ["demo", "test"] } }` |

---

## Operadores Lógicos

| Operador | Descripción | Ejemplo |
| ---------- | ----------- | ------- |
| `$or` | O lógico | `{ $or: [{ a: 1 }, { b: 2 }] }` |
| `$and` | Y lógico | `{ $and: [{ a: 1 }, { b: 2 }] }` |
| `$not` | Negación | `{ edad: { $not: { $gt: 18 } } }` |
| `$exists` | Campo existe | `{ email: { $exists: true } }` |

---

## Operadores de Actualización

| Operador | Descripción | Ejemplo |
|----------|-------------|---------|
| `$set` | Asignar valor | `{ $set: { nombre: "Ana" } }` |
| `$unset` | Eliminar campo | `{ $unset: { temporal: "" } }` |
| `$inc` | Incrementar valor | `{ $inc: { visitas: 1 } }` |
| `$push` | Agregar a array | `{ $push: { tags: "nuevo" } }` |
| `$pull` | Eliminar de array | `{ $pull: { tags: "viejo" } }` |
