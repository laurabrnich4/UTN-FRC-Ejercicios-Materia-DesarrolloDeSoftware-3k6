// Importamos Express, un framework minimalista que se monta sobre el módulo HTTP nativo de Node 
// para facilitarnos la creación de rutas, el manejo de peticiones y respuestas JSON.
import express from "express";

// Importamos las funciones lógicas de la capa de servicios para interactuar con la base de datos.
import { getAllProducts, addProduct } from "./services/products-service.js";    

// Esta línea está comentada. Significa que el proyecto dejó de usar la conexión SQL cruda/nativa de 'db-init.js'
// para volcarse por completo al uso del ORM (Sequelize).
//import db from './data/db-init.js'

// Importamos el objeto de conexión de Sequelize para poder sincronizar las tablas al arrancar el servidor.
import { cnn_db } from "./data/cnn-sequelize.js";

// Inicializamos la aplicación de Express y la guardamos en la constante 'app'. 
// Este objeto representa a nuestro servidor web.
const app = express(); 

// Aplicamos un "Middleware". Esta línea es fundamental: le dice a Express que configure 
// de forma automática el servidor para que entienda cuando un cliente (como Postman o el Frontend) 
// le envíe datos formateados en JSON dentro del cuerpo de la petición (req.body).
app.use(express.json())


// Endpoint raíz: Configura una ruta de tipo GET para la URL base "/".
// Cuando alguien entra a http://localhost:3000/ recibe una respuesta rápida de bienvenida.
app.get("/", (req, res) => {
  // 'res.json' envía automáticamente una respuesta con las cabeceras correctas (application/json)
  // transformando nuestro objeto de JavaScript en una cadena JSON.
  res.json({ message: "Hola, mundo! Este es mi primer API con Node.js y Express" }); 
});


// Endpoint para obtener productos: Configura una ruta GET en "/products".
// Es una función asíncrona (async) porque va a esperar una respuesta de la base de datos.
app.get("/products", async (req, res) => {
    try {
        // Llamamos a la función del servicio que usa Sequelize para traer todos los productos.
        // Usamos 'await' para detener la ejecución hasta que la consulta termine.
        const products = await getAllProducts();
        
        // Devolvemos la lista de productos al cliente en formato JSON.
        // Express por defecto asigna el código de estado HTTP 200 OK cuando usamos res.json().
        res.json(products); 
    } catch (error) {
        // Si algo falla en la conexión o la consulta (por ejemplo, base de datos bloqueada o corrupta),
        // el bloque catch atrapa el error y responde con un código de estado 500 (Internal Server Error).
        res.status(500).json({ error: "Error al obtener los productos" });
    }           
}); 


// Endpoint para crear productos: Configura una ruta POST en "/products".
// Se usa POST porque el cliente va a "enviar" datos nuevos para que se guarden en el servidor.
app.post("/products", async (req, res) => {
    try {
            // Capturamos el objeto producto que nos mandó el cliente en el cuerpo de la petición.
            const data = req.body
            
            // Validamos que efectivamente nos haya llegado información.
            if (data){
                // Le pasamos los datos recibidos al servicio para que Sequelize haga el INSERT INTO.
                await addProduct(data)
                
                // Respondemos con un mensaje de éxito en formato JSON.
                res.json({message: "Se registró exitosamente!"})
            } else {
                 // Si por alguna razón 'data' está vacío, respondemos con un código de estado 400 (Bad Request).
                 // Le avisamos al cliente que construyó mal su petición.
                 res.status(400).json({message:  "Se esperaba objeto producto"})   
            }

    } catch (error) {
        // En caso de que falle el guardado en SQLite, devolvemos un 500.
        res.status(500).json({ error: "Error al crear el producto" });
    }           
}); 


// Ponemos a nuestro servidor Express a escuchar en el puerto 3000.
// Modificaste esta función para que sea asíncrona (async) y eso está perfecto por lo que pasa adentro:
app.listen(3000, async() => {
    // Usamos 'await cnn_db.sync({})'. Este comando de Sequelize es mágico: analiza tus modelos 
    // (en este caso 'Product') y mira si la tabla correspondiente existe en el archivo 'products.sqlite'.
    // Si la tabla no existe, la crea automáticamente con todas sus columnas y reglas antes de que el servidor acepte visitas.
    await cnn_db.sync({})
    console.log('Base de datos sincronizada')
    
    // Una vez que la BD está lista, avisamos en consola que el servidor ya está operativo.
    console.log("Servidor escuchando en http://localhost:3000");
});

