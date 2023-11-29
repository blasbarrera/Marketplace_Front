import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../assets/styles/catalog.css'; // Importa los estilos del catálogo
import '../assets/styles/admin.css'; // Importa los estilos del panel de administrador

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
