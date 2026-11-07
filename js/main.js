/**
 * main.js
 * 
 * Este archivo renderiza la lista de clases agrupadas por categorías.
 * En tu versión de React, esta lógica se divide en varios componentes:
 * - <Home /> (página principal)
 * - <CategoriaSection /> (para agrupar por categoría iterando sobre 'categorias')
 * - <ClaseCard /> (para mostrar cada tarjeta de clase)
 */

document.addEventListener("DOMContentLoaded", () => {
    fetchClases();
});

const categorias = ['Cardio', 'Fuerza', 'Flexibilidad', 'Combate'].sort();

/**
 * Función para cargar los datos del backend.
 * En React: se hace dentro de un `useEffect` usando un estado `useState` para
 * almacenar 'clases', 'loading' y 'error'.
 */

/* Aca pide datos entonces esto va al hook  
   ¿Qué muestra mientras carga y si falla? → eso va a Loader y ErrorMessage. Ese HTML lo copio y lo traduzco a JSX en Loader.jsx y ErrorMessage.jsx
*/
async function fetchClases() {
    const container = document.getElementById("categorias-container");
    // ¿Qué muestra mientras carga y si falla? → eso va a Loader y ErrorMessage. Ese HTML lo copio y lo traduzco a JSX en Loader.jsx y ErrorMessage.jsx
    // Mostramos estado de carga ("loading = true" en React)
    // Loader.jsx:
    container.innerHTML = `
        <article class="container loading">
            <div class="loader"></div>
        </article>
    `;

    try {
        const res = await fetch('/api/clases');
        if (!res.ok) throw new Error("Error en la respuesta del servidor");

        const data = await res.json();
        renderCategorias(data);

    } catch (error) {
        console.error(error);
        // Mostramos el componente de error ("error = true" en React)
        // ErrorMessage.jsx
        container.innerHTML = `
            <div class="error">
                <h1>🍻 La función está demorada</h1>
                <p>Estamos preparando las cervezas y ajustando las mancuernas 🍺🏋️‍♂️</p>
                <p>Intenta nuevamente en algunos instantes...</p>
            </div>
        `;
    }
}

/**
 * Renderiza el HTML iterando sobre las categorías y clases.
 * En React: se hace devolviendo un arreglo de map() dentro del return (JSX).
 */

// ¿Qué se repite? → cada bucle se vuelve un componente.
function renderCategorias(clases) {
    const container = document.getElementById("categorias-container");
    container.innerHTML = ""; // Limpiar el loading

    categorias.forEach(cat => { // ← bucle de AFUERA: una vez por categoría
        // En React esto sería el componente <CategoriaSection/>  va en el issue 3.4
        const htmlCategoria = document.createElement("article");
        htmlCategoria.className = "categoria";
        let headerHtml = `<h2>🍺 ${cat}</h2><div class="clases-grid" id="grid-${cat}">`;
        
        // esta parte no se traduce
        const clasesDeCategoria = clases.filter(clase => clase.categoria === cat);
        let cardsHtml = "";

        // esta parte si se traduce
        clasesDeCategoria.forEach(c => { // ← bucle de ADENTRO: una vez por clase
            // En React esto sería el componente <ClaseCard />, pasándole 'c' como props
            // card a traducir para el issue 3.3
            cardsHtml += `
                <div class="card">
                    <a href="/clase.html?id=${c.id}">
                        <div class="card-picture">
                            <img src="${c.imagen}" alt="${c.nombre}" title="${c.nombre}" />
                            <div class="card-badge">${c.categoria}</div>
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">${c.nombre}</h3>
                            <p class="card-instructor">👨‍🏫 ${c.instructor}</p>
                            <div class="card-info">
                                <span class="card-duration">⏱️ ${c.duracion} min</span>
                                <span class="card-level">📈 ${c.nivel}</span>
                            </div>
                            <div class="card-beer">
                                <p class="card-beer-title">🍺 Cerveza Incluida</p>
                                <p class="card-beer-name">${c.birra_incluida.nombre}</p>
                                <p class="card-beer-type">${c.birra_incluida.tipo}</p>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        });

        const footerHtml = `</div>`;
        htmlCategoria.innerHTML = headerHtml + cardsHtml + footerHtml;
        
        container.appendChild(htmlCategoria);
    });
}

// La lista de categorías y el filter van en HomePage.jsx (paso 3.6), que usa el hook y arma las secciones.
