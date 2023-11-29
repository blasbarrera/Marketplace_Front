// src/NotFound.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/NotFound.css'; // Archivo de estilos para el componente

const NotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1 className="error-title">Error 404</h1>
          <p className="error-message">La página que estás buscando no existe o la ruta es incorrecta.</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;