// Importamos funciones específicas desde nuestro archivo de acceso a datos (DAO - Data Access Object).
// Estas funciones son las encargadas de ir a buscar la información cruda (por ejemplo, a una API o base de datos).
import { getUsers, getPosts } from "../data/dao.js"

// Importamos nuestras clases del dominio (nuestros "moldes"). 
// Servirán para darle el formato y comportamiento que nosotros queremos a los datos crudos.
import Usuario from "../domain/Usuario.js"
import Post from "../domain/Post.js"

// 'export async' define que esta función puede ser exportada para usarse en otro lado 
// y que es "asíncrona". Esto significa que ejecutará tareas que demoran tiempo (como pedir datos)
// y no detendrá el resto del programa mientras espera.
export async function obtenerUsuarios(){
    // Creamos un arreglo (array) vacío donde guardaremos los usuarios ya formateados.
    const usuarios = []

    // 'await' pausa la ejecución de esta función hasta que 'getUsers()' termine de traer la información.
    // Una vez que llegan los datos crudos, se guardan en la constante 'users'.
    const users = await getUsers()    

    // Recorremos el arreglo de datos crudos 'users' uno por uno con un bucle 'forEach'.
    users.forEach(user => {
        // Por cada dato crudo ('user'), creamos una nueva instancia de nuestra clase Usuario.
        const usuario = new Usuario(user)
        // Empujamos ('push') ese nuevo objeto ya formateado a nuestro arreglo 'usuarios'.
        usuarios.push(usuario)
    });

    // Devolvemos el arreglo final lleno de objetos de clase Usuario.
    return usuarios
}

export async function obtenerUsuariosPorNombre(nombre){
    // Nuevamente, esperamos y traemos todos los usuarios crudos.
    const users = await getUsers()    

    // Usamos el método '.find()' para buscar el primer elemento en el arreglo que cumpla una condición.
    // Convertimos ambos textos (el del usuario y el que buscamos) a minúsculas con '.toLowerCase()' 
    // para que la búsqueda no falle si hay diferencias en mayúsculas.
    // '.includes()' verifica si el texto buscado ('nombre') está contenido dentro del nombre del usuario.
    const buscado = users.find(user => user.name.toLowerCase().includes(nombre.toLowerCase()))
    
    // Retornamos usando un "operador ternario" (condición ? si_es_verdadero : si_es_falso).
    // Si encontró a alguien ('buscado' existe), devuelve una nueva instancia de Usuario.
    // Si no encontró a nadie ('buscado' es undefined), devuelve 'null' (nulo/nada).
    return buscado ? new Usuario(buscado) : null
}

export async function obtenerPostPorNombre(nombre) {
    // Reutilizamos la función que armamos arriba. Le pasamos el nombre y esperamos a ver 
    // si nos devuelve un objeto Usuario o un null.
    const usuario = await obtenerUsuariosPorNombre(nombre);
   
    // "Early return" o retorno temprano: Si el usuario NO existe (!usuario), 
    // cortamos la ejecución de la función acá mismo y devolvemos 'null'. No tiene sentido buscar sus posts.
    if (!usuario) {
        return null;
    }

    // Si pasó el filtro anterior, significa que el usuario existe. 
    // Buscamos sus posteos pasándole su ID (que en nuestra clase Usuario lo llamamos 'numero').
    const postData = await getPosts(usuario.numero);

    // '.map()' es un método de los arreglos muy útil. Toma el arreglo de posts crudos ('postData'),
    // lo recorre, y por cada elemento ('p') crea y devuelve una nueva instancia de 'Post'.
    // Al final, retorna un nuevo arreglo lleno de objetos de la clase Post. ¡Mucho más corto que usar forEach!
    return postData.map(p => new Post(p));
}