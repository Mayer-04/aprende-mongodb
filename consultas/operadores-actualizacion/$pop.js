/*
 * Operador $pop - Eliminar el primer o ultimo elemento de un array
Si el array está vacío, $pop no hace nada
 */

// Eliminar el último elemento del array (1)
db.users.updateOne(
  { name: "Mayer" }, 
  { $pop: { skills: 1 } }
)

// Eliminar el primer elemento del array (-1)
db.users.updateOne(
  { name: "Mayer" }, 
  { $pop: { skills: -1 } }
)

// Valores permitidos:
// 1  = elimina el último elemento (final del array)
// -1 = elimina el primer elemento (inicio del array)

// Ejemplo de documento:
{ name: "Mayer", skills: ["JavaScript", "Python", "MongoDB"] }
// Después de $pop: { skills: 1 }
{ name: "Mayer", skills: ["JavaScript", "Python"] }