import { useEffect, useState } from "react";
import { apiFetch } from "../api/client"; // issue 3.1

// Custom hook para cargar los videojuegos desde la API.
//
// MUY IMPORTANTE :
// - Aquí solo se define la **estructura básica** del hook.
// - La lógica real de llamada a la API, manejo de errores y estados

export function useClases() {
  const [clases, setClases] = useState([]); // issue 3.1 arranca sin datos 
  const [loading, setLoading] = useState(true); // issue 3.1 arranca en true porque esta cargando
  const [error, setError] = useState(null); // issue 3.1 arranca en false porque no hay error

  useEffect(() => {
    // TODO:
    // - Usar aquí `apiFetch` (u otra función que implementes) para llamar a
    //   GET /api/videojuegos.
    // - Actualizar `loading`, `error` y `gamesByPlatform` según el resultado.
    // - Tener en cuenta el montaje/desmontaje del componente si es necesario.
    //
    // Pista:
    // - El formato esperado de `gamesByPlatform` es un objeto:
    //   { PC: [...], PlayStation: [...], Xbox: [...], Nintendo: [...] }

    // issue 3.1
    const getClases = async () => {
      try {
        const data = await apiFetch("/clases");
        setClases(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getClases();
  }, []);

  // Devolvemos el contrato que usarán las páginas/componente.
  // issue 3.1
  return {
    clases, 
    loading, 
    error
  };
}

// pasar a issue 3.2 components/Loader.jsx y components/ErrorMessage.jsx (crearlos)
