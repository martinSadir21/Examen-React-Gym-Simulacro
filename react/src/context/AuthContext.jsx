// issue 5:
import { createContext, useState, useEffect } from "react";

// Contexto de autenticación.
//
// MUY IMPORTANTE :
// - Aquí se deja solo la estructura mínima del contexto.
// - La lógica real de:
//    * restaurar el usuario desde localStorage,
//    * iniciar sesión (login),
//    * cerrar sesión (logout),
//
// Pista:
// - Inspírate en `js/login.js` de la versión vanilla.
// - Respeta las claves de localStorage usadas allí (`usuario`, `rol`).

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // issue 5: Al abrir la app: ¿había alguien logueado?
  useEffect(() => {
    // TODO:
    // - Leer de localStorage el usuario y su rol.
    // - Si existe, llamar a `setUser` con un objeto adecuado.
    // issue 5:
    const guardado = localStorage.getItem("user"); 
    const logueado = localStorage.getItem("isLoggedIn") === "true"; 
    if (guardado && logueado) {
      setUser(JSON.parse(guardado));
    }
  }, []);

  const login = (adminData) => {
    // TODO:
    // - Guardar el usuario en el estado (`setUser`).
    // - Persistir la información necesaria en localStorage.
    // - `userData` debería contener al menos: fullName y rol.
    // issue 5:
    setUser(adminData);
    localStorage.setItem("user", JSON.stringify(adminData));
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = () => {
    // TODO:
    // - Limpiar el usuario del estado.
    // - Borrar la información de localStorage.
    // issue 5:
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// ir a issue 6: Formulario de login + header y issue 6.1: components/LoginForm.jsx
