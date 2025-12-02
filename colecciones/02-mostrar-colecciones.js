// Ver todas las colecciones
show collections

// Ver colecciones como array como array
db.getCollectionNames() // Ejemplo: ["productos", "usuarios", "registros"]

// Información detallada de las colecciones
db.getCollectionInfos()

// Ver solo colecciones que empiezan con "user"
db.getCollectionInfos({ name: /^user/ })