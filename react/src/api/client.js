// Cliente API centralizado para la app React.
// TODAS las llamadas a la API deben usar esta base URL.
// 
// - Aquí SOLO se deja la constante con la base URL.
// - La lógica real de llamadas a la API (fetch, manejo de errores, etc.)

export const API_BASE_URL = "http://localhost:3000/api";

// TODO:
// - Implementar una función helper (por ejemplo `apiFetch`) que reciba:
//     - `path` (string con el endpoint, ej: "/videojuegos")
//     - `options` (objeto opcional para método, headers, body, etc.)
// - Componer la URL completa usando `API_BASE_URL`.
// - Realizar la petición con `fetch` y devolver los datos parseados.
// - Manejar errores de red y respuestas no-OK de forma apropiada.
//
// Pista:
// - Esta función se reutilizará en hooks como `useGames` y en el login.

// issue 2 Crear funcion apiFetch (funcion generica fijarse puerto y ruta de API_BASE_URL)
export async function apiFetch(path, options = {}) {
  const { method = "GET", body } = options;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
  const data = await response.json().catch(() => ({}));
  const error = new Error(data.error || data.message || `Error ${response.status}`);
  error.status = response.status;
  throw error;
}

  return response.json();
}

// ir a Issue 3 mirar js/main.js y desarmarlo en piezas de React
// Tambien verificar que los nombres coincidan en hooks y components y ver si HomePage.jsx los importa
// ir al primer hook en este caso useClases.jsx Issue 3.1