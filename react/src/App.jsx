// Issue 1.3 Agregar route

import { Routes, Route } from "react-router-dom"; // Issue 1.3
import { Layout } from "./components/Layout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { ClaseDetailPage } from "./pages/ClaseDetailPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx"; // Issue 1.3

// Componente raíz de la SPA.
// AQUÍ debes definir las rutas principales usando React Router. ver que se importa
// Issue 1.3 ver El README, en la sección “Routing”
export default function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/clases/:id" element={<ClaseDetailPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </Layout>
  );
}
// ir a Issue 1.4 Crear pagina 404 NotFoundPage en pages/

