import { ClaseCard } from "./ClaseCard.jsx"; // issue 3.4

// issue 3.4

export function CategoriaSection({ categoria, clases }) { //{ categoria, clases } son las dos props que le pasa HomePage: el nombre (antes cat) y las clases ya filtradas (antes clasesDeCategoria)
  return (
    <article className="categoria">          {/* createElement("article") + className */}
      <h2>🍺 {categoria}</h2>                 {/* el headerHtml */}
      <div className="clases-grid">
        {clases.map((clase) => (              /* el forEach de las cards */
          <ClaseCard key={clase.id} clase={clase} />
        ))}
      </div>
    </article>
  );
}

// pasar a issue 3.5 pages/HomePage.jsx: juntar todo