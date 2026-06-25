# 🌐 Sitio Interactivo - Sistema de Login Responsive

¡Bienvenido al **Sitio Interactivo**! Este es un proyecto de desarrollo web frontend que implementa un sistema de autenticación dinámico, responsive y simulado en tiempo real utilizando JavaScript Vanilla y Bootstrap 5.

El sitio cuenta con una página principal dinámica que reacciona según el estado de la sesión del usuario y una interfaz de inicio de sesión estilizada.

---

## 🚀 Características Clave

* **Login Multi-Rol:** Sistema inteligente que diferencia y procesa accesos tanto para usuarios comunes (registrados en una lista en memoria) como para perfiles de Administrador.
* **Diseño 100% Responsive:** Tarjeta de login estilizada y adaptada con Flexbox y utilidades de Bootstrap para asegurar una visualización óptima tanto en dispositivos móviles (pantallas pequeñas) como en monitores de escritorio.
* **Persistencia de Sesión:** Uso de `LocalStorage` para recordar al usuario logueado. Al iniciar sesión, el sistema oculta los botones de ingreso e inyecta un saludo personalizado en la barra de navegación.
* **Control de Flujo Dinámico (Bonus):** Ocultamiento automático de elementos de la interfaz (como el carrusel promocional) una vez que el usuario se ha autenticado con éxito.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5 Semántico:** Estructuración limpia del documento y formularios.
* **Bootstrap v5.3.8:** Framework de CSS utilizado para el diseño responsive, grillas (`row`/`col`), componentes (Navbar, Carrusel, Cards) y manejo de estados visuales (`d-none`).
* **JavaScript (ES6+):** Lógica pura (Vanilla JS) para la manipляция del DOM, captura de eventos (`onsubmit`, `onload`), validación de credenciales y gestión del almacenamiento local.

---

## 📂 Estructura del Proyecto

```text
├── index.html          # Página principal con carrusel, navbar y sección de contacto
├── login.html          # Interfaz de inicio de sesión responsive
├── css/
│   └── styles.css      # Estilos personalizados del sitio
└── js/
    ├── index.js        # Lógica de carga de página y manejo de estado de sesión
    └── login.js        # Validaciones de formularios, base de datos en memoria e interceptores
```

---

## 💻 Instrucciones de Uso e Instalación
No necesitas configurar ningún servidor local ni bases de datos externas para probar este proyecto. Al estar desarrollado del lado del cliente, podés ejecutarlo directamente:

Clona este repositorio en tu máquina local:
*    git clone [https://github.com/TU_USUARIO/TU_REPOSITORIO.git](https://github.com/TU_USUARIO/TU_REPOSITORIO.git)
*    Abre el proyecto: Navega a la carpeta del proyecto y haz doble clic sobre el archivo index.html para abrirlo en tu navegador web de preferencia.

Credenciales de Prueba:
* Usuario Común: usuarioComun@gmail.com / Contraseña: usuario123
* Administrador: admin@empresa.com / Contraseña: admin123
