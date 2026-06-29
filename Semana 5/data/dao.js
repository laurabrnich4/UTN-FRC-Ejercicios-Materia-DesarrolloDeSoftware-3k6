//constantes:
// Define la URL raíz de la API (JSONPlaceholder es una API falsa gratuita muy usada para pruebas).
// Al guardarla en una constante, si el dominio cambia en el futuro, solo necesitas modificar esta línea.
const URL_BASE = 'https://jsonplaceholder.typicode.com/';


//funciones:

// Exporta una función asíncrona (async) que obtiene la lista completa de usuarios.
// Es asíncrona porque la petición a la red toma tiempo y no bloquea el resto del programa.
export async function getUsers() {
    // Realiza una petición HTTP GET a la URL base concatenada con 'users'.
    // La palabra 'await' pausa la ejecución de esta función hasta que el servidor devuelva una respuesta.
    const response = await fetch(URL_BASE + 'users');

    // Extrae el cuerpo de la respuesta y lo convierte de formato JSON a un arreglo de objetos de JavaScript.
    // Este proceso también es asíncrono, por lo que requiere su propio 'await'.
    const users = await response.json();

    // Devuelve los datos de los usuarios ya procesados y listos para usarse.
    return users;
}

// Exporta una función asíncrona que obtiene las publicaciones (posts) de un usuario específico.
// Recibe como parámetro 'userId', que es el identificador único del usuario.
export async function getPosts(userId){
    // Realiza la petición usando comillas invertidas (template literals) para inyectar la variable 'userId'
    // directamente en la URL. Esto crea un "query parameter" (?userId=...) para filtrar los resultados.
    const response = await fetch(`${URL_BASE}posts?userId=${userId}`);

    // Convierte la respuesta obtenida del servidor de formato JSON a objetos nativos de JavaScript.
    const posts = await response.json();

    // Devuelve el arreglo con las publicaciones que le pertenecen a ese usuario en específico.
    return posts;
}
