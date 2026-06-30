// Importamos la clase principal 'Sequelize' desde la librería 'sequelize'.
// Sequelize es un ORM (Object-Relational Mapper) que nos permite interactuar 
// con bases de datos usando JavaScript en lugar de escribir consultas SQL a mano.
import { Sequelize } from "sequelize";

// Instanciamos un nuevo objeto Sequelize para establecer la conexión a la base de datos.
// Lo guardamos en una constante llamada 'cnn_db' y usamos 'export' para que 
// esta conexión pueda ser importada y reutilizada en otros archivos (como tus modelos o el index).
export const cnn_db = new Sequelize("productos", "", "", {
    // 'dialect' define el motor de base de datos que Sequelize debe utilizar.
    // Al indicarle 'sqlite', Sequelize sabe cómo traducir el código JS a comandos de SQLite.
    dialect: 'sqlite',
    
    // 'storage' es una opción específica cuando se usa el dialecto SQLite.
    // Indica la ruta relativa donde SEQUELIZE VA A CREAR o leer el ARCHIVO físico de la BASE DE DATOS.
    // En este caso, buscará el archivo 'products.sqlite' dentro de la carpeta 'data/'.
    storage: './data/products.sqlite'
}) // nombre DB, user, pass, options 
   // (Aclaración sobre los parámetros vacíos: Sequelize siempre espera la estructura (BaseDeDatos, Usuario, Contraseña). 
   // Como SQLite guarda todo en un archivo local sin autenticación, los campos de usuario y contraseña se pasan vacíos "").