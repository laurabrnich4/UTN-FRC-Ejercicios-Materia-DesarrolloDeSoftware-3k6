// Importamos 'DataTypes' de Sequelize, que contiene todos los tipos de datos válidos (INTEGER, STRING, FLOAT, etc.).
// También se importa 'DATE' (aunque en este modelo en particular no se terminó usando).
import { DataTypes, DATE } from 'sequelize'

// Importamos la conexión 'cnn_db' que configuramos en 'cnn-sequelize.js'.
// La necesitamos porque es esta conexión la que va a registrar el modelo en la base de datos.
import { cnn_db } from '../data/cnn-sequelize.js'

// Definimos y exportamos el modelo 'Product'.
// 'cnn_db.define' recibe tres argumentos: el nombre del modelo ("Product"), 
// la estructura de las columnas (el primer objeto {}) y las opciones de configuración (el segundo objeto {}).
export const Product = cnn_db.define("Product", {
    // Definición de la columna 'id'
    "id": {
        type: DataTypes.INTEGER, // Tipo de dato: Número entero
        primaryKey: true,        // Le indica a la base de datos que este campo es la Clave Primaria (única)
        autoIncrement: true,     // El ID se generará solo de forma secuencial (1, 2, 3...) al crear un producto
        allowNull: false         // No permite que este campo quede vacío (NOT NULL)
    },
    // Definición de la columna 'nombre'
    "nombre": {
        type: DataTypes.STRING,  // Tipo de dato: Cadena de texto (VARCHAR en SQL)
        allowNull: false         // Obligatorio, cada producto debe tener un nombre
    },
    // Definición de la columna 'precio'
    "precio": {
        type: DataTypes.FLOAT,   // Tipo de dato: Número decimal (flotante)
        allowNull: false,        // Obligatorio
        defaultValue: 0          // Si al crear el producto no le pasás un precio, por defecto le asignará 0
    },
    // Definición de la columna 'stock'
    "stock": {
        type: DataTypes.INTEGER, // Tipo de dato: Número entero
        allowNull: false,        // Obligatorio
        defaultValue: 0          // Si no se especifica el stock al crearlo, empieza en 0
    }
},
    // Objeto de opciones de configuración para este modelo
    {
        // 'timestamps: false' le dice a Sequelize que NO cree automáticamente las columnas 
        // 'createdAt' (fecha de creación) y 'updatedAt' (fecha de modificación) en la tabla.
        timestamps: false, 
        
        // Pasamos la instancia de la conexión para asociar explícitamente este modelo a ella.
        cnn_db
    }
)
