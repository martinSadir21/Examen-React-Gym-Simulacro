// issue 6.2
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import { LoginForm } from "./LoginForm.jsx"; // issue 6.2

export function Layout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleLogout = () => {
    // issue 6.2:
    logout();
    navigate("/");
  };

  return (
    <>
      <header>
        <div className="brand-container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="logo-title">🍻💪 BIRRA Y BÍCEPS</h1>
          </Link>
          <p className="slogan">Porque la vida es equilibrio.</p>
        </div>

        <div className="login-container">
          {/*ISsue 6.2 cambiar de null a LoginForm*/}
          {user ? (
            <div id="userInfo">
              <span id="userNameDisplay">
                Bienvenido, {user.firstName} - {user.rol}
              </span>
              <button className="btn-quilmes-secondary" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </div>
          ) : (
            <LoginForm />
          )}
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <p>
          🍻 Birra y Bíceps © {currentYear} - Gimnasio con Actitud | Bebe con
          Responsabilidad 🍺
        </p>
      </footer>
    </>
  );
}