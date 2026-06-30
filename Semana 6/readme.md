# Primer API con Node.js, Express y Sequelize

Este proyecto es una API REST minimalista diseñada para la gestión de un catálogo de productos. Está desarrollada sobre **Node.js** utilizando **Express** como framework web, **Sequelize** como ORM (Object-Relational Mapping) y **SQLite** como motor de base de datos local.

La aplicación implementa una arquitectura limpia organizada en capas para separar de manera clara las responsabilidades de persistencia, modelos de datos, lógica de negocio y enrutamiento.

---

## 📁 Estructura del Proyecto

La organización de archivos sigue las mejores prácticas de desarrollo backend:

```text
├── data/
│   ├── cnn-sequelize.js    # Configuración de la conexión del ORM Sequelize
│   ├── db-init.js          # Inicialización nativa de SQLite3 (mantenimiento/historial)
│   └── products.sqlite     # Archivo binario de la base de datos (se genera automáticamente)
├── models/
│   └── productos.js        # Definición del modelo 'Product' y sus campos en la BD
├── services/
│   └── products-service.js # Capa de servicios (Lógica de negocio y consultas CRUD)
├── .gitignore              # Archivos y carpetas excluidos del control de versiones
├── index.js                # Punto de entrada principal del servidor Express
├── index_old.js            # Servidor HTTP nativo original (historial de desarrollo)
├── package.json            # Configuración del proyecto y dependencias de npm
└── package-lock.json       # Historial exacto de versiones de dependencias
```
---

## 🛠️ Tecnologías Utilizadas
   - **Node.js**: Entorno de ejecución para JavaScript en el servidor.

   - **Express**: Framework web rápido y minimalista para el manejo de rutas y middlewares.

   - **Sequelize**: ORM para interactuar con la base de datos mediante objetos de JavaScript en lugar de consultas SQL manuales.

   - **SQLite3**: Motor de base de datos relacional embebido que almacena los datos en un único archivo local (products.sqlite).

---

## 🚀 Instalación y Ejecución

1. Instalar las dependencias del proyecto:
   ```
   npm install
   ```

2. Levantar el servidor local (el puerto por defecto es el 3000):
   ```
   node index.js
   ```

```
Nota: En el primer arranque, Sequelize creará automáticamente el archivo de la base de datos si este no existe.
```

---

## 🔌 Endpoints Disponibles
`GET /` -> Retorna un mensaje JSON de bienvenida.

`GET /products` -> Devuelve la lista completa de productos desde la base de datos.

`POST /products` -> Registra un nuevo producto.

   Body (JSON):

   ```
      JSON
      {
      "nombre": "Nombre del Producto",
      "precio": 1500.50,
      "stock": 10
      }
   ```