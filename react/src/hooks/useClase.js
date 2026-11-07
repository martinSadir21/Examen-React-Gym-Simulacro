// issue 4.2
// es el useClases con 3 cambios listados:

import { useEffect, useState } from "react";
import { apiFetch } from "../api/client.js";

export function useClase(id) {                      // 1. recibe el id
  const [clase, setClase] = useState(null);         //    una clase: arranca en null (no [])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);  // 2. estado nuevo: ¿no existe?

  useEffect(() => {
    const getClase = async () => {
      setLoading(true);
      setError(null);
      setNotFound(false);

      try {
        const data = await apiFetch(`/clases/${id}`);   // endpoint con el id
        setClase(data);
      } catch (err) {
        if (err.status === 404) setNotFound(true);  // 3. la API dijo "no existe"
        else setError(err);                         //    cualquier otro error
      } finally {
        setLoading(false);
      }
    };

    getClase();
  }, [id]);                                         // ← depende del id

  return { clase, loading, error, notFound };
}

// ir a issue 4.3 pages/ClaseDetailPage.jsx