// =========================================================================
// EVENTO DE CARGA DE LA PÁGINA
// =========================================================================

// window.onload asegura que la función se ejecute automáticamente RECIÉN cuando 
// todo el HTML, las imágenes y los estilos de la página se hayan cargado por completo.
window.onload = function() {
    
    // 1. CAPTURA DE DATOS Y ELEMENTOS DEL HTML:
    
    // Intenta buscar en la memoria del navegador (LocalStorage) si existe un valor 
    // guardado bajo la clave 'usuarioLogueado' (que guardamos en el login exitoso).
    const usuarioLogueado = localStorage.getItem('usuarioLogueado');
    
    // Captura el elemento HTML del menú que sirve para ir a loguearse (por ejemplo, un botón o enlace "Login").
    const linkLogin = document.getElementById('linkLogin');
    
    // Captura el elemento HTML (un <span> o un <p> vacío) destinado a mostrar el texto de bienvenida.
    const saludo = document.getElementById('saludoUser');

    // =========================================================================
    // CONTROL DE FLUJO: ¿HAY UN USUARIO CON SESIÓN ACTIVA?
    // =========================================================================

    // Evaluamos la condición: Si la variable 'usuarioLogueado' contiene algo (es decir, no es null o vacía)...
    if (usuarioLogueado) {
        
        // ACCIONES SI EL USUARIO ESTÁ LOGUEADO:
        
        // Le añade la clase 'd-none' (clase de Bootstrap que significa "display: none") al enlace de Login.
        // Esto hace que el botón de "Login" desaparezca visualmente de la pantalla.
        linkLogin.classList.add('d-none'); 
        
        // Modifica el texto interno del elemento de saludo, inyectándole un mensaje 
        // personalizado combinando la palabra "Bienvenido, " con el nombre guardado en memoria.
        saludo.innerText = "¡Bienvenido, " + usuarioLogueado + "!";
        
        // Le quita la clase 'd-none' al elemento de saludo. 
        // Al remover la propiedad que lo ocultaba, el nombre del usuario pasa a ser visible en el menú.
        saludo.classList.remove('d-none'); 
        
        
        // ACCIÓN BONUS INCLUIDA:
        
        // Busca en el documento un elemento con el id 'promoCarousel' (probablemente un carrusel de imágenes 
        // con ofertas publicitarias) y le añade 'd-none' para ocultarlo, asumiendo que un usuario 
        // que ya inició sesión no necesita ver esa publicidad de bienvenida.
        document.getElementById('promoCarousel').classList.add('d-none');
    }
};

