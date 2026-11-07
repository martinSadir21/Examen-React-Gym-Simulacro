// issue 4.3 armar con la misma formula que home pedir datos, if de carga y error, dibujar

import { Link, useParams } from "react-router-dom";
import { useClase } from "../hooks/useClase.js";
import { Loader } from "../components/Loader.jsx";
import { ErrorMessage } from "../components/ErrorMessage.jsx";
import { NotFoundPage } from "./NotFoundPage.jsx";

export function ClaseDetailPage() {
  const { id } = useParams(); // el :id de la URL
  const { clase, loading, error, notFound } = useClase(id); // el hook

  if (loading) return <Loader />;
  if (notFound) return <NotFoundPage />; // ← nuevo: reutilizo el 404
  if (error) return <ErrorMessage />;

  return (
    <div className="clase-page-container">
      <Link to="/" className="back-btn">
        ⬅ Volver al catálogo
      </Link>
      {/* Issue 4.4 traducir renderClase() aca abajo: */}
      <div className="clase-details">
        <div className="clase-header">
          <h2>{clase.nombre}</h2>
          <p className="instructor">👨‍🏫 Instructor: {clase.instructor}</p>
        </div>

        <div className="clase-body">
          <div>
            <img
              src={clase.imagen}
              alt={clase.nombre}
              className="clase-image"
            />

            <div className="clase-meta">
              <div className="meta-item">
                <strong>⏱️ Duración</strong>
                <span>{clase.duracion} min</span>
              </div>
              <div className="meta-item">
                <strong>📈 Nivel</strong>
                <span>{clase.nivel}</span>
              </div>
              <div className="meta-item">
                <strong>🔥 Calorías</strong>
                <span>{clase.calorias_quemadas}</span>
              </div>
            </div>

            <div className="beer-section">
              <h3>🍺 CERVEZA INCLUIDA</h3>
              <div className="beer-details">
                <div className="beer-detail-item">
                  <strong>Nombre:</strong>
                  <span>{clase.birra_incluida.nombre}</span>
                </div>
                <div className="beer-detail-item">
                  <strong>Tipo:</strong>
                  <span>{clase.birra_incluida.tipo}</span>
                </div>
                <div className="beer-detail-item">
                  <strong>Graduación:</strong>
                  <span>{clase.birra_incluida.graduacion}</span>
                </div>
                <div className="beer-detail-item">
                  <strong>Origen:</strong>
                  <span>{clase.birra_incluida.origen}</span>
                </div>
              </div>
              <div className="beer-description">
                {clase.birra_incluida.descripcion}
              </div>
            </div>
          </div>

          <div className="clase-info">
            <h3>📄 Descripción</h3>
            <p>{clase.resumen}</p>

            <h3>🕒 Horarios Disponibles</h3>
            <ul className="horarios-list">
              {clase.horarios.map((horario) => (
                <li key={horario}>{horario}</li>
              ))}
            </ul>

            <h3>🏋️ Equipamiento Necesario</h3>
            <ul className="equipamiento-list">
              {clase.equipamiento.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>🌟 Beneficios</h3>
            <ul className="beneficios-list">
              {clase.beneficios.map((beneficio) => (
                <li key={beneficio}>{beneficio}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ir a issue 4.4 Traducir renderClase() en js/clase.js
