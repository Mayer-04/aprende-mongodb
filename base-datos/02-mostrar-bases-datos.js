// Ver todas las bases de datos con datos
show dbs

// Resultado ejemplo:
// admin          40.00 KiB
// config        108.00 KiB
// local          72.00 KiB
// tienda          8.00 KiB

// Otra forma (devuelve un objeto con más detalles)
db.adminCommand({ listDatabases: 1 })

// Solo ver los nombres
db.adminCommand({ listDatabases: 1, nameOnly: true })