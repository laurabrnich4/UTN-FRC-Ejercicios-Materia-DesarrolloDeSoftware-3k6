// ==========================================
// 1. BASE DE DATOS SIMULADA (MEMORIA)
// ==========================================

// Se define un array (lista) que simula una base de datos de usuarios registrados.
// Cada usuario es un objeto con propiedades de email, password y name.
const lstUsuarios = [
    { email: 'laurabrnich4@gmail.com', password: '123', name: 'Laura'},
]

// ==========================================
// 2. FUNCIÓN: validarLogin (Para usuarios comunes)
// ==========================================

// Función que se ejecuta al intentar iniciar sesión. Recibe el 'event' del formulario.
function validarLogin(event){
    // Cancela el comportamiento por defecto del formulario (evita que la página se recargue 
    // o intente viajar a otra URL antes de que validemos los datos).
    event.preventDefault(); 
  
    // Busca el elemento HTML con id 'email', toma lo que escribió el usuario (.value) 
    // y con .trim() elimina los espacios vacíos que puedan haber quedado al inicio o al final.
    const email = document.getElementById('email').value.trim();
    
    // Hace lo mismo que la línea anterior pero para capturar la contraseña.
    const password = document.getElementById('password').value.trim();  

    // CONTROL DE CAMPOS VACÍOS:
    // Si el email está vacío O (||) la contraseña está vacía...
    if (email === '' || password === '') {
        // Muestra un cartel de alerta al usuario informando el error.
        alert('Por favor, complete todos los campos.');
        // Corta la ejecución de la función inmediatamente (no sigue leyendo el código de abajo).
        return;
    }   

    // BÚSQUEDA DEL USUARIO:
    // Inicia un bucle 'for...of' para recorrer uno por uno los usuarios de la lista 'lstUsuarios'.
    for (const usuario of lstUsuarios) {
        // Compara si el email del usuario de la lista coincide con el ingresado 
        // Y ADEMÁS (&&) la contraseña de la lista coincide con la ingresada.
        if (usuario.email === email && usuario.password === password) {
                // Si ambos coinciden, avisa que el ingreso fue correcto.
                alert('¡Login exitoso!');    
                
                // Guarda en la memoria del navegador (LocalStorage) el nombre del usuario logueado
                // bajo la clave 'usuarioLogueado' para recordar quién entró incluso si se cierra la pestaña.
                localStorage.setItem('usuarioLogueado', usuario.name); 
                
                // Redirige automáticamente al navegador hacia la página 'index.html'.
                window.location.href = 'index.html';
                // Corta la función ya que encontramos al usuario y terminamos el proceso.
                return  
        }
    }
    
    // Si el bucle 'for' termina y nunca entró al 'if' (es decir, no encontró coincidencias),
    // se ejecuta esta línea mostrando un mensaje de error.
    alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
}

// ==========================================
// 3. FUNCIÓN: alertaLogin (Función de prueba)
// ==========================================

// Una función secundaria que parece haber quedado como una prueba o borrador.
function alertaLogin(event) {
    // Evita la recarga de la página.
    event.preventDefault();
    // Muestra un mensaje estático advirtiendo que falta programar la lógica real aquí.
    alert('Función de alerta de login. Reemplazar con lógica real.');
}

// ==========================================
// 4. ESTRUCTURA Y FUNCIÓN PARA ADMINISTRADOR
// ==========================================

// Se define un objeto único que almacena las credenciales fijas del Administrador del sitio.
const objAdmin = {mail: 'admin@empresa.com', password: 'admin123'}


// Función alternativa para validar credenciales, orientada a comprobar si es el Administrador.
function validarUsuario(event) {
    // Evita que el formulario se envíe automáticamente y recargue la página.
    event.preventDefault(); 

    // Obtener los valores de los campos de email y contraseña:
    
    // Primero guarda el elemento HTML completo del input email en la variable '$email'.
    const $email = document.getElementById('email')
    // Luego extrae su texto quitando los espacios de los extremos.
    const email = $email.value.trim();

    // Hace el mismo proceso de dos pasos para capturar la contraseña.
    const $password = document.getElementById('password')
    const password = $password.value.trim();

    // VALIDACIÓN DE CAMPOS VACÍOS:
    // Verifica que ningún campo se haya enviado en blanco.
    if (email === '' || password === '') {
        alert('Por favor, complete todos los campos.');
        return; // Frena la función si falta algún dato.
    }

    // VALIDACIÓN CONTRA EL USUARIO ADMIN:
    // Compara si el correo ingresado es exactamente igual al mail de 'objAdmin'
    // Y (&&) si la contraseña ingresada es exactamente igual a la password de 'objAdmin'.
    if (email === objAdmin.mail && password === objAdmin.password) {
        // Si coincide, muestra el cartel de éxito de administrador.
        alert('¡Login exitoso como ADMINISTRADOR!');

        localStorage.setItem('usuarioLogueado', usuario.name);

        // Redirige al usuario a la página principal 'index.html'.
        window.location.href = 'index.html'; 
        return; // Termina la función con éxito.
    }else{
         // Si los datos NO coinciden con los del administrador, entra a este bloque 'else'
         // y muestra el mensaje de error.
         alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
    }
    
}
