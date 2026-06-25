/* Bloque de datos de prueba (comentado). 
Originalmente, esto se usaba como base de datos local o "mock" (datos de prueba). 
Como está comentado, el código ya no lo lee desde acá, sino que ahora busca la información 
directamente en el almacenamiento interno del navegador (localStorage).

let autosAgencia = [ 
    { marca: 'Renault', modelo: 'Sandero', anio: 2022, precio: 19000000 }, 
    { marca: 'Chevrolet', modelo: 'Cruze', anio: 2019, precio: 23000000 }, 
    { marca: 'Citroen', modelo: 'C3', anio: 2021, precio: 17000000 }, 
    { marca: 'Fiat', modelo: 'Cronos', anio: 2023, precio: 21500000 } //  
]; 
*/

// --- SECCIÓN DE EVENTOS ---

// 1. Escuchar la carga del documento:
// "DOMContentLoaded" espera a que todo el HTML se haya cargado completamente antes de ejecutar la función "fillData".
// Esto es vital para evitar errores al intentar modificar elementos HTML que todavía no se dibujaron en la pantalla.
document.addEventListener("DOMContentLoaded", fillData);

// 2. Seleccionar el botón de filtrar:
// Buscamos el elemento HTML con el ID 'btn-filtrar'.
// Nota: Usar el signo "$" adelante de la variable (ej. $btn) es una convención común entre programadores 
// para indicar rápidamente que esa variable guarda un elemento del DOM (un nodo HTML), no un dato simple.
const $btn = document.getElementById('btn-filtrar');

// 3. Asignar la acción de filtrado:
// Le agregamos un "escuchador de eventos". Cuando el usuario haga 'click' en el botón, 
// se ejecuta todo el bloque de código dentro de la función flecha () => { ... }
$btn.addEventListener('click', () => {
    
    // Seleccionamos el cuerpo de la tabla (el <tbody> del HTML) donde van las filas de los autos.
    const $tbody = document.getElementById('tablaAutosBody');
    
    // Vaciamos el contenido actual de la tabla. 
    // Si no hacemos esto, al filtrar se sumarían los resultados a los autos que ya estaban mostrándose.
    $tbody.innerHTML = "";
    
    // Obtenemos los datos desde el almacenamiento local del navegador (localStorage).
    // localStorage.getItem("data") trae los datos en formato de texto (string).
    // JSON.parse() convierte ese texto de vuelta a un objeto/array real de JavaScript.
    // El "|| []" actúa como un seguro: si el localStorage está vacío (es null), devolvemos un array vacío por defecto.
    const data = JSON.parse(localStorage.getItem("data")) || [];
    
    // Filtramos los datos:
    // El método .filter() recorre el array 'data' y crea un NUEVO array ('dataFiltered') conservando 
    // únicamente los autos (x) cuya 'marca' sea exactamente igual (===) a la marca que el usuario eligió en el <select>.
    const dataFiltered = data.filter(x => x.marca === document.getElementById('filtrarPorMarca').value);
    
    // Recorremos el nuevo array filtrado para armar la tabla en pantalla:
    // El método .forEach() ejecuta el bloque de código por cada auto en el array filtrado.
    dataFiltered.forEach(x => {
        
        // Usamos "template strings" (las comillas invertidas ``) para escribir código HTML en múltiples líneas.
        // Los valores de cada auto (marca, modelo, etc.) se inyectan dinámicamente usando ${x.propiedad}.
        // Importante: toLocaleString('es-AR') le da al precio el formato numérico argentino (ej. 19.000.000 en vez de 19000000).
        let row = `<tr> 
                <td>${x.marca}</td> 
                <td>${x.modelo}</td> 
                <td>${x.anio}</td> 
                <td>$${x.precio.toLocaleString('es-AR')}</td> 
                 </tr>`;
                 
        // Inyectamos la fila recién armada dentro del cuerpo de la tabla HTML.
        // El operador "+=" es clave porque ADICIONA la nueva fila debajo de las anteriores, sin borrarlas.
        $tbody.innerHTML += row;
    });
});


// --- SECCIÓN DE FUNCIONES ---

// Esta función es la encargada de mostrar TODOS los autos guardados cuando recién entrás a la página.
// La lógica es prácticamente idéntica a la del botón "filtrar", pero sin usar el método .filter().
function fillData() {
    
    // Seleccionamos el cuerpo de la tabla.
    const $tbody = document.getElementById('table-body');
    
    // Traemos toda la información del localStorage (o el array vacío de seguridad).
    const data = JSON.parse(localStorage.getItem("data")) || [];
    
    // Recorremos la totalidad de los datos para imprimir cada uno.
    data.forEach(x => {
        
        // Armamos la fila HTML exactamente igual que arriba.
        let row = `<tr> 
                <td>${x.marca}</td> 
                <td>${x.modelo}</td> 
                <td>${x.anio}</td> 
                <td>$ ${x.precio.toLocaleString('es-AR')}</td> 
                 </tr>`;
                 
        // Añadimos la fila al contenido del tbody.
        $tbody.innerHTML += row;
    });
}