// src/FrontPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/FrontPage.css'; // Archivo de estilos para el componente

const FrontPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1 className="welcome-title">Bienvenido a EasyMarketplace</h1>
          <p className="welcome-message">Descubre nuestra amplia variedad de productos.</p>
          <div className="button-container">
            <Link to="/admin" className="btn btn-primary">Administrador</Link>
            <Link to="/user" className="btn btn-success">Usuario</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;