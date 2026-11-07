import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Issue 1.2
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx"; // Issue 1.2
import "./index.css";

// Punto de entrada principal de la aplicación React.
ReactDOM.createRoot(document.getElementById("root")).render(
  // Issue 1.2
  <React.StrictMode> 
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// ir a Issue 1.3 en App.jsx