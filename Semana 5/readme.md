# Integración con JSONPlaceholder - Cliente de Consumo API

Este proyecto es una aplicación backend construida con **Node.js** que consume datos de la API de pruebas **JSONPlaceholder**. Implementa una arquitectura limpia y modular dividida en capas para separar las responsabilidades de acceso a datos, lógica de negocio y modelos del dominio.

## 🚀 Características Clave

- **Estructura Modular (Arquitectura en Capas):** Separación clara entre datos (DAO), lógica de negocio (Services) y entidades (Domain).
- **Programación Orientada a Objetos (POO):** Mapeo de datos crudos a instancias de clases nativas (`Usuario` y `Post`) con métodos encapsulados.
- **Sintaxis Moderna (ES Modules):** Uso estandarizado de `import` y `export` configurado mediante `"type": "module"`.
- **Asincronía Avanzada:** Manejo eficiente de operaciones de red utilizando `async/await`.

## 📂 Estructura del Proyecto
```text
JSONPlaceholder/
├── data/
│   └── dao.js          # Objeto de Acceso a Datos (Peticiones externas/API)
├── domain/
│   ├── Post.js         # Modelo y lógica de la entidad Post
│   └── Usuario.js      # Modelo y lógica de la entidad Usuario
├── services/
│   └── service.js      # Capa de servicios (Lógica de negocio y filtrado)
├── index.js            # Punto de entrada principal de la aplicación
├── package.json        # Configuración del proyecto y dependencias
└── README.md           # Documentación del proyecto
```