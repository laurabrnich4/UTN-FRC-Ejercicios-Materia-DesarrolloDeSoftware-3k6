// Importamos las funciones específicas que necesitamos desde nuestra capa de servicios.
// Nota que aquí usamos la ruta relativa "./" porque estamos en la raíz del proyecto
// y necesitamos entrar a la carpeta 'services'.
import { obtenerUsuarios, obtenerPostPorNombre } from "./services/service.js";

// Definimos una función principal llamada 'main'.
// Se declara como 'async' porque adentro vamos a ejecutar operaciones que toman tiempo 
// (nuestras llamadas a los servicios) y necesitamos usar la palabra clave 'await'.
// En Node.js es una excelente práctica envolver el código inicial en una función main asíncrona.
async function main() {
    
    // Llamamos a nuestro servicio para traer todos los usuarios y 'esperamos' (await) su respuesta.
    // Una vez que el servicio termina, guarda el arreglo de objetos Usuario en la constante 'usuarios'.
    const usuarios = await obtenerUsuarios()
    
    // Recorremos ese arreglo de usuarios uno por uno.
    usuarios.forEach(e => {
        // 'e' representa cada objeto Usuario individual en cada vuelta del bucle.
        // Llamamos al método 'mostrar()' de esa instancia (que imprime sus datos formateados)
        // y lo mostramos en la terminal usando 'console.log()'.
        console.log(e.mostrar())
    })    

    // Ahora probamos el otro servicio: pedimos los posts de un usuario específico por su nombre.
    // Nuevamente usamos 'await' para que el programa espere a que lleguen los datos antes de continuar.
    const posts = await obtenerPostPorNombre('Leanne Graham')
    
    // Recorremos el arreglo de posts devuelto (que ahora son instancias de la clase Post).
    // Nota: Esta es una forma más corta de escribir un arrow function cuando solo tiene una línea.
    // Imprimimos en consola el resultado del método 'mostrar()' de cada post (el que vimos en Post.js).
    posts.forEach(p => console.log(p.mostrar()))

}

// Todo el código de arriba solo 'define' lo que va a pasar, pero no se ejecuta solo.
// Esta última línea es la que da el "puntapié inicial", llamando a la función 'main' 
// para que el script arranque de verdad cuando escribas 'npm run start' en la terminal.
main()
