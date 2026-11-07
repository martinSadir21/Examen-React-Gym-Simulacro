// Issue 1.4 traducir de 404.html a react, Si el <body> trae <header>/<main>/<footer> → copiar SOLO lo de adentro del <main>

import { Link } from "react-router-dom";

// Issue 1.4 
// paso de class a className, 
// de style="margin-top: 2rem; font-size: 3rem" a style={{ marginTop: "2rem" ,  fontSize: "3rem"}}
// de <a href="/"> a <Link to="/">
// cerrar con />
// ${} → {}
// forEach → .map() con key
// onclick → onClick={función}

export function NotFoundPage() {
    return(
        <div className="error-container">
        <div className="error-content">
            <h1 className="logo-title-large">🍻💪 BIRRA Y BÍCEPS</h1>
            <p className="slogan-large">Porque la vida es equilibrio.</p>

            <div className="error-message">
                <h2 className="error-code">404</h2>
                <h3 className="error-title">¡Clase No Encontrada!</h3>
                <p className="error-description">
                    Parece que esta clase se fue a tomar una birra sin avisar. 🍻
                </p>
                <p className="error-subdescription">
                    No te preocupes, tenemos muchas otras clases esperándote en el catálogo.
                </p>

                <Link to="/" className="btn-quilmes btn-large">
                    🔙 Volver al Catálogo
                </Link>
            </div>

            <div className="beer-animation" style={{marginTop: "2rem", fontSize: "3rem"}}>
                <div className="beer-glass" style={{display: "inline-block"}}>🍺</div>
                <div className="dumbbell" style={{display: "inline-block"}}>🏋️‍♂️</div>
            </div>
        </div>
    </div>
    );
}

// ir a Issue 2 react/src/api/client.js
