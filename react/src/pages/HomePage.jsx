// issue 3.5

// traer lo que ya hice:
import { useClases } from "../hooks/useClases.js";
import { CategoriaSection } from "../components/CategoriaSection.jsx";
import { Loader } from "../components/Loader.jsx";
import { ErrorMessage } from "../components/ErrorMessage.jsx";

// copiarlo de main.js
const CATEGORIAS = ["Cardio", "Fuerza", "Flexibilidad", "Combate"].sort();

export function HomePage() {
  // Lo que devuelve mi hook useClases:
  const { clases, loading, error } = useClases();

  // siempre igual:
  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;

  // El categorias.forEach(cat => ...) de main.js, convertido a .map():
  return (
    <div>
      {CATEGORIAS.map((categoria) => (
        <CategoriaSection
          key={categoria}
          categoria={categoria}
          clases={clases.filter((clase) => clase.categoria === categoria)} // Copiado de main.js
        />
      ))}
    </div>
  );
}

// paso a issue 4.1 ir a js/clase.js