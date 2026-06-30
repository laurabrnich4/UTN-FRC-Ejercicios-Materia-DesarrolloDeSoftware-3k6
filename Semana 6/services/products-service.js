// Importamos el modelo 'Product' que definiste en 'productos.js'.
// Al importarlo, traemos con él todos los métodos listos para usar de Sequelize 
// (como findAll o create) para poder interactuar con la tabla de SQLite.
import { Product } from "../models/productos.js";

// -------------------------------------------------------------------------
// Este bloque que está comentado (/* ... */) es un "mock" o dato de prueba.
// Seguramente se usó al principio del proyecto para probar que la API funcionara 
// devolviendo un array estático de la memoria, antes de tener Sequelize configurado. 
// Como ahora los datos se guardan de verdad en la base de datos, este código ya no se usa.
/*const products = [
    { id: 1, name: 'Producto 1', price: 10.99, stock: 100 },
    { id: 2, name: 'Producto 2', price: 19.99, stock: 50 },
    { id: 3, name: 'Producto 3', price: 5.99, stock: 200 },
];*/
// -------------------------------------------------------------------------


// Definimos y exportamos una función para obtener todos los productos.
// Usamos 'async' porque consultar una base de datos es un proceso asíncrono 
// (toma unos milisegundos y Node no puede quedarse "congelado" esperando).
export async function getAllProducts() {
    // Usamos 'await' para decirle a Node: "esperá a que la base de datos responda".
    // Product.findAll() hace la consulta SQL (SELECT * FROM Products).
    // El 'return' final devuelve ese listado de productos a quien haya llamado a esta función.
    return await Product.findAll();
}


// Definimos y exportamos una función para agregar un nuevo producto.
// Recibe un parámetro 'p', que será un objeto con los datos que manda el usuario 
// desde el frontend o Postman (por ejemplo: { nombre: "Mouse", precio: 2500, stock: 5 }).
export async function addProduct(p){
    // Usamos Product.create(p) para insertar esa información como una nueva fila en SQLite.
    // Internamente, Sequelize lo traduce a: INSERT INTO Products (nombre, precio, stock) VALUES (...).
    // Usamos 'await' para asegurar de que termine de guardarse antes de dar la operación por terminada.
    await Product.create(p)
}
