// issue 6.1: 
import { useState } from "react";
import { useAuth } from "../hooks/useAuth.js";
import { apiFetch } from "../api/client.js"; // issue 6.1

// Componente de formulario de login.
//
// MUY IMPORTANTE (EXAMEN):
// - Este componente está pensado para usarse dentro del `Layout`
//   (similar a cómo el login aparece en el header en la versión JS vanilla).
// - Aquí solo se deja la estructura del formulario y los estados básicos.
// - La llamada real a la API (usando **POST** a `/api/login`) y la integración
//   con el contexto de autenticación deben ser IMPLEMENTADAS POR EL ALUMNO.

export function LoginForm() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => { // issue 6.1 agregar async
    event.preventDefault();
    setError(null);
    setLoading(true);

    // TODO:
    // - Llamar a la API para validar credenciales usando:
    //     POST /api/login
    // - Si las credenciales son correctas, llamar a `login(...)` del contexto.
    // - Si no, mostrar un mensaje de error adecuado en `setError(...)`.
    // - Al finalizar, volver a poner `loading` en false.

    // issue 6.1:
    try {
      const adminData = await apiFetch("/login", {
        method: "POST",
        body: { username, password },
      });
      login(adminData);
    } catch (err) {
      setError(
        err.status === 401
          ? "🍺 Usuario o contraseña incorrectos"
          : "Error de red. Intentá de nuevo.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="loginForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="btn-quilmes" disabled={loading}>
        {loading ? "Ingresando..." : "Ingresar"}
      </button>
      {error && <p style={{ color: "#ffb3b3", margin: 0 }}>{error}</p>}
    </form>
  );
}

// ir a issue 6.2 components/Layout.jsx

