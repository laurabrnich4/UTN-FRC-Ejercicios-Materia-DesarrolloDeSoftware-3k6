// Importamos el módulo nativo 'http' de Node.js.
// Este módulo viene incorporado en Node (no hay que instalarlo con npm) y provee las herramientas 
// de más bajo nivel para escuchar peticiones de red y enviar respuestas a través del protocolo HTTP.
import http from 'http'; 

// Creamos un servidor web HTTP utilizando el método 'createServer'.
// Este método recibe como argumento una función (callback) que se va a ejecutar AUTOMÁTICAMENTE 
// cada vez que alguien intente ingresar a nuestra API (por ejemplo, desde el navegador o Postman).
// Esta función nos da dos objetos cruciales:
//   - 'req' (request/petición): Contiene toda la información de lo que nos envían (la URL, los datos, etc.).
//   - 'res' (response/respuesta): Es el objeto que usamos para armar y enviar lo que va a recibir el usuario.
const server = http.createServer((req, res) => {
  
  // Configuramos la cabecera (header) de la respuesta.
  // El número 200 es el código de estado HTTP que significa "OK" (todo salió bien).
  // El objeto { 'Content-Type': 'text/plain' } le avisa al navegador o cliente que lo que le estamos 
  // enviando es puro texto plano, no es HTML, ni una imagen, ni un JSON.
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Con 'res.end()' finalizamos el proceso de respuesta y le entregamos el paquete de datos al cliente.
  // En este caso, el cliente va a ver impreso en su pantalla el texto que pasamos acá adentro.
  // Si te olvidás de poner esta línea, el navegador se quedaría "cargando" infinitamente.
  res.end('Hola, mundo! Este es mi primer API con Node.js');
});

// Le ordenamos a nuestro servidor que empiece a "escuchar" activamente en el puerto 3000.
// Un puerto es como una "puerta" o canal específico en tu computadora dedicado a este programa.
// El segundo argumento es otra función callback que se ejecuta una sola vez justo cuando 
// el servidor logra levantarse con éxito.
server.listen(3000, () => {
  // Mostramos un mensaje en la consola de la terminal para que nosotros, como desarrolladores,
  // sepamos que el servidor ya está prendido y listo para recibir visitas en esa URL.
  console.log('Servidor escuchando en http://localhost:3000');
});

