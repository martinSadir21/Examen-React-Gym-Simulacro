import { Link } from "react-router-dom"; // importar link para traducir a

// issue 3.3 ir a js/main.js y buscar el html de la card arranca en <div class="card">
// Traducirlo a react

export function ClaseCard({ clase }) {
  return (
    <div className="card">
      <Link to={`/clases/${clase.id}`}>
        <div className="card-picture">
          <img src={clase.imagen} alt= {clase.nombre} title= {clase.nombre} />
          <div className="card-badge">{clase.categoria}</div>
        </div>
        <div className="card-content">
          <h3 className="card-title">{clase.nombre}</h3>
          <p className="card-instructor">👨‍🏫 {clase.instructor}</p>
          <div className="card-info">
            <span className="card-duration">⏱️ {clase.duracion} min</span>
            <span className="card-level">📈 {clase.nivel}</span>
          </div>
          <div className="card-beer">
            <p className="card-beer-title">🍺 Cerveza Incluida</p>
            <p className="card-beer-name">{clase.birra_incluida.nombre}</p>
            <p className="card-beer-type">{clase.birra_incluida.tipo}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Qué cambió respecto de la vanilla:

// function ClaseCard({ clase }): recibe una clase por props. Las llaves { clase } sacan la prop clase directamente (eso se llama desestructurar).
// ${c.nombre} → {clase.nombre}.
// <img src="${c.imagen}"> → <img src={clase.imagen} />: sin comillas y cerrado con />.
// <a href="/clase.html?id=${c.id}"> → <Link to={`/clases/${clase.id}`}>: va a la ruta del detalle que definiste en App.jsx.
// clase.birra_incluida.nombre: la cerveza es un objeto dentro de la clase, así que se entra con otro punto.

// pasar a issue 3.4 crear componente CategoriaSection.jsx