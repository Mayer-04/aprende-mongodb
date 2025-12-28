// $regex: buscar documentos usando expresiones regulares

// Buscar nombres que comiencen con "A"
db.users.find({ name: { $regex: "^A" } });

// Búsqueda case-insensitive (mayúsculas/minúsculas):
db.users.find({ name: { $regex: "^a", $options: "i" } });

// Buscar nombres que terminen con "ez":
db.users.find({ name: { $regex: "ez$" } });

// Buscar nombres que contengan "and":
db.users.find({ name: { $regex: "and", $options: "i" } });

// Sintaxis alternativa con barras:
db.users.find({ name: /^A/i });

// Opciones comunes:
// i = case-insensitive
// m = multiline
// s = permite que . coincida con saltos de línea
