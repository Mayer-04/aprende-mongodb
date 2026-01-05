/*
* Ejercicio 1: Filtrar usuarios activos

El equipo de marketing quiere enviar un correo solo a usuarios activos.

Qué debes hacer:

- Obtener solo usuarios con estado "active".
- Mostrar únicamente name y email.

Debes usar

- aggregate()
- $match
- $project
*/

// Solución
db.users.aggregate([
  {
    $match: {
      status: "active",
    },
  },
  {
    $project: {
      name: 1,
      email: 1,
    },
  },
]);
