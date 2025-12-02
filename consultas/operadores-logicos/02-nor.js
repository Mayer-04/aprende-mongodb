// NOR: NINGUNA condición debe cumplirse
// Encuentra documentos que NO cumplan ninguna de las condiciones

/* 
Diferencia entre NOR y NOT:
- $nor niega múltiples condiciones
- $not niega una sola condición
*/ 

// Usuarios que NO son de Cali Y NO tienen 50+ años
// Resultado: usuarios de otras ciudades con menos de 50 años
db.usuarios.find({
  $nor: [
    { ciudad: "Cali" },
    { edad: { $gte: 50 } }
  ]
})

// Productos que NO están en oferta Y NO tienen stock bajo
db.productos.find({
  $nor: [
    { enOferta: true },
    { stock: { $lt: 10 } }
  ]
})

// Usuarios que NO son de estas ciudades
db.usuarios.find({
  $nor: [
    { ciudad: "Bogotá" },
    { ciudad: "Medellín" },
    { ciudad: "Cali" }
  ]
})

// Combinar NOR con otras condiciones
// Usuarios activos que NO son de Cali Y NO tienen más de 50 años
db.usuarios.find({
  activo: true,
  $nor: [
    { ciudad: "Cali" },
    { edad: { $gte: 50 } }
  ]
})