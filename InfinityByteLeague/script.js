let servicios = ["Desarrollo de paginas web", "Desarollo de Aplicaciones", "Consultoria en Ciberseguridad", "Consultoria en Transformación Digital, Cursos y Talleres"];

// Función para mostrar productos en tarjetas
function displayCatalog(products) {
    // Obtener el contenedor de las tarjetas de productos
    const catalogContainer = document.getElementById("servicios");

    // Limpiar el contenido actual del contenedor de catálogo
    catalogContainer.innerHTML = "";

    // Iterar sobre cada producto en el arreglo pasado como argumento
    products.forEach(product => {
        // Crear un nuevo elemento <div> para cada tarjeta
        const card = document.createElement("div");

        // Asignar clases de Bootstrap para el diseño de la tarjeta
        card.className = "col-md-4 mb-3";

        // Definir el contenido HTML de cada tarjeta
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${product}</h5>
                </div>
            </div>
        `;
        // Añadir la tarjeta al contenedor principal del catálogo
        catalogContainer.appendChild(card);
    });
}

// Función para agregar un producto al catálogo
function agregarProduct() {

    const productInput = document.getElementById("productInput"); // Obtener el valor del campo de entrada de texto
    const productin = productInput.value.trim();    // Quitar espacios en blanco del inicio y fin del valor ingresado
    if (productin) { // Verificar que el campo de entrada no esté vacío
        servicios.push(productin); // Agregar el nuevo producto al arreglo del catálogo

        // Limpiar el campo de entrada después de agregar el producto
        productin.value = ""; //Ya limpia    
        // Actualizar la visualización del catálogo con el nuevo producto
    } else {
        alert("Por favor, ingresa un nombre de producto."); // Mostrar una alerta si el campo de entrada está vacío si no se llena el input 
    }
}

    // Función para buscar un producto en el catálogo
    function searchInput() {
        const searchInput = document.getElementById("buscarInput").value.trim()
    // Obtener el valor del campo de búsqueda
    if (searchInput) {
        // Verificar si el campo de búsqueda no está vacío
    const filtrarProductos = servicios.filter(product=> Aquí falta algo ) {

    }
   
    // Filtrar el arreglo del catálogo para obtener productos que incluyan el texto buscado
    // Mostrar solo los productos que coinciden con la búsqueda
    }else {
    displayCatalog (servicios): // Si el campo de búsqueda está vacío, mostrar todos los productos
    }
}



    // Llamar a la función displayCatalog para mostrar el catálogo inicial al cargar la página
    displayCatalog(catalog);