// Importamos todo el contenido de la librería nativa 'sqlite3'.
// Esta librería es el "driver" que permite a Node.js entenderse directamente con SQLite,
// sin intermediarios (sin ORM como Sequelize).
import * as sqlite3 from 'sqlite3';

// Creamos una nueva conexión a la base de datos y la guardamos en la constante 'db'.
// 'sqlite3.default.Database' recibe tres parámetros principales para establecer esta conexión:
const db = new sqlite3.default.Database(
    // 1er parámetro: La ruta física donde se encuentra el archivo de la base de datos.
    "./data/products.sqlite",
    
    // 2do parámetro: El modo en el que queremos abrir el archivo.
    // 'OPEN_READWRITE' le dice a SQLite que queremos permisos para leer y escribir datos.
    // Ojo: con este modo específico, si el archivo no existe, arrojará un error (no lo crea solo).
    sqlite3.OPEN_READWRITE, 
    
    // 3er parámetro: Un "callback" (una función que se ejecuta automáticamente al terminar 
    // el intento de conexión). Recibe el parámetro 'err' por si algo sale mal.
    (err)=>{ 
        // Si ocurrió algún error (es decir, 'err' tiene algún valor), 
        // lo imprimimos en la consola para saber qué falló (por ejemplo, "archivo no encontrado").
        if (err) 
             console.error(err.message)
    }
)

// Exportamos esta conexión como el módulo por defecto del archivo.
// Esto permite importar 'db' en otros lugares de tu proyecto para ejecutar consultas SQL puras 
// (por ejemplo, para crear las tablas iniciales con comandos como db.run("CREATE TABLE...")).
export default db;
