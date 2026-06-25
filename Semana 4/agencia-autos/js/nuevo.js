const $btn = document.getElementById('btn-aceptar');

$btn.addEventListener('click', () => {

    // 1. CAPTURAR LOS DATOS DEL FORMULARIO
    // Vamos al HTML, buscamos cada input por su ID y le extraemos el valor (.value) que el usuario escribió.
    const marcaIngresada = document.getElementById('inputMarca').value;
    const modeloIngresado = document.getElementById('inputModelo').value;
    
    // Importante: Todo lo que viene de un <input> llega como texto (String). 
    // Como el año y el precio son números, usamos Number() para convertirlos, 
    // así evitamos problemas matemáticos más adelante.
    const anioIngresado = Number(document.getElementById('inputAnio').value);
    const precioIngresado = Number(document.getElementById('inputPrecio').value);

    // 2. RECUPERAR LOS DATOS VIEJOS
    const data = JSON.parse(localStorage.getItem('data')) || [];

    // 3. ARMAR EL NUEVO AUTO CON LAS VARIABLES CAPTURADAS
    // En lugar de valores fijos, le pasamos las variables que creamos arriba.
    const nuevoAuto = { 
        marca: marcaIngresada, 
        modelo: modeloIngresado, 
        anio: anioIngresado, 
        precio: precioIngresado 
    };

    // 4. AGREGARLO A LA LISTA
    data.push(nuevoAuto);

    // 5. GUARDAR EN LOCALSTORAGE Y REDIRECCIONAR
    localStorage.setItem("data", JSON.stringify(data));
    window.location.href = "index.html";
});