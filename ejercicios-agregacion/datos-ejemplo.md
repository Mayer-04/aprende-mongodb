# Datos de Ejemplo para Ejercicios de Agregación

Datos ficticios para una tienda online (`ecommerce_db`).  
Copia y pega en `mongosh` para practicar los ejercicios de agregación.

---

## Estructura de Datos

| Colección | Campos Principales | Descripción |
| --------- | ----------------- | ----------- |
| `users` | `name`, `email`, `status`, `createdAt` | Usuarios de la tienda |
| `products` | `name`, `category`, `price`, `stock` | Catálogo de productos |
| `orders` | `userId`, `status`, `amount`, `createdAt` | Pedidos realizados |
| `reviews` | `productId`, `userId`, `rating`, `comment` | Reseñas de productos |

**Relaciones:**

- `orders.userId` → `users._id`
- `reviews.productId` → `products._id`
- `reviews.userId` → `users._id`

---

## Base de Datos

```js
use ecommerce_db
```

---

## Colección: `users`

```js
db.users.insertMany([
  {
    _id: ObjectId("65a000000000000000000001"),
    name: "Ana Torres",
    email: "ana@example.com",
    status: "active",
    password: "hash123",
    createdAt: ISODate("2024-01-10T10:00:00Z")
  },
  {
    _id: ObjectId("65a000000000000000000002"),
    name: "Luis Pérez",
    email: "luis@example.com",
    status: "inactive",
    password: "hash456",
    createdAt: ISODate("2024-02-15T12:00:00Z")
  },
  {
    _id: ObjectId("65a000000000000000000003"),
    name: "María Gómez",
    email: "maria@example.com",
    status: "active",
    password: "hash789",
    createdAt: ISODate("2024-03-05T08:30:00Z")
  }
])
```

---

## Colección: `products`

```js
db.products.insertMany([
  {
    _id: ObjectId("65b000000000000000000001"),
    name: "Laptop",
    category: "electronics",
    price: 1200,
    stock: 10
  },
  {
    _id: ObjectId("65b000000000000000000002"),
    name: "Headphones",
    category: "electronics",
    price: 150,
    stock: 50
  },
  {
    _id: ObjectId("65b000000000000000000003"),
    name: "Coffee Mug",
    category: "home",
    price: 20,
    stock: 100
  }
])
```

---

## Colección: `orders`

```js
db.orders.insertMany([
  {
    _id: ObjectId("65c000000000000000000001"),
    userId: ObjectId("65a000000000000000000001"),
    status: "paid",
    amount: 1200,
    createdAt: ISODate("2024-04-01T10:15:00Z")
  },
  {
    _id: ObjectId("65c000000000000000000002"),
    userId: ObjectId("65a000000000000000000001"),
    status: "shipped",
    amount: 150,
    createdAt: ISODate("2024-04-10T14:20:00Z")
  },
  {
    _id: ObjectId("65c000000000000000000003"),
    userId: ObjectId("65a000000000000000000002"),
    status: "pending",
    amount: 20,
    createdAt: ISODate("2024-05-05T09:00:00Z")
  },
  {
    _id: ObjectId("65c000000000000000000004"),
    userId: ObjectId("65a000000000000000000003"),
    status: "paid",
    amount: 1500,
    createdAt: ISODate("2024-05-20T16:45:00Z")
  }
])
```

---

## Colección: `reviews`

```js
db.reviews.insertMany([
  {
    _id: ObjectId("65d000000000000000000001"),
    productId: ObjectId("65b000000000000000000001"),
    userId: ObjectId("65a000000000000000000001"),
    rating: 5,
    comment: "Excelente producto",
    createdAt: ISODate("2024-04-02T11:00:00Z")
  },
  {
    _id: ObjectId("65d000000000000000000002"),
    productId: ObjectId("65b000000000000000000002"),
    userId: ObjectId("65a000000000000000000003"),
    rating: 4,
    comment: "Muy bueno",
    createdAt: ISODate("2024-04-15T13:30:00Z")
  }
])
```
