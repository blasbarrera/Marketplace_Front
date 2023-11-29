// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import UserCatalog from './UserCatalog';
import CreateArticleForm from './CreateArticleForm';
import FrontPage from './FrontPage'; 
import NotFound from './NotFound'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/nav.css';

//Imagenes de prueba

import ProductImage1 from '../assets/images/pera.jpg';
import ProductImage2 from '../assets/images/papaya.jpg';
import ProductImage3 from '../assets/images/fresa.jpg';
import ProductImage4 from '../assets/images/coco.jpg';
import ProductImage5 from '../assets/images/mango.jpg';
import ProductImage6 from '../assets/images/Mora-Azul.jpg';
import ProductImage7 from '../assets/images/aguacate.jpg';
import ProductImage8 from '../assets/images/hamburguesa.jpg';
import ProductImage9 from '../assets/images/abanico.jpg';
import ProductImage10 from '../assets/images/silla.jpg';
import ProductImage11 from '../assets/images/mesa.jpg';
import ProductImage12 from '../assets/images/gorra.jpg';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Pera', description: 'Fruta recién cosechada', price: 900, image: ProductImage1 },
    { id: 2, name: 'Papaya', description: 'Fruta recién cosechada', price: 1500, image: ProductImage2 },
    { id: 3, name: 'Fresa', description: 'Fruta recién cosechada', price: 8000, image: ProductImage3 },
    { id: 4, name: 'Coco', description: 'Fruta recién cosechada', price: 1500, image: ProductImage4 },
    { id: 5, name: 'Mango', description: 'Fruta recién cosechada', price: 1000, image: ProductImage5 },
    { id: 6, name: 'Mora Azul', description: 'Fruta recién cosechada', price: 2100, image: ProductImage6 },
    { id: 7, name: 'Aguacate', description: 'Fruta recién cosechada', price: 5900, image: ProductImage7 },
    { id: 8, name: 'Hamburguesa', description: 'Comida rápida', price: 15000, image: ProductImage8 },
    { id: 9, name: 'Abanico', description: 'Ventilador de piso', price: 150000, image: ProductImage9 },
    { id: 10, name: 'Silla', description: 'Silla de madera de roble', price: 45000, image: ProductImage10 },
    { id: 11, name: 'Mesa', description: 'Mesa de madera resistente 4 puestos', price: 100000, image: ProductImage11 },
    { id: 12, name: 'Gorra', description: 'Accesorio para la cabeza', price: 35000, image: ProductImage12 },
    // ... Otros productos iniciales del usuario
  ]);

  return (
    <Router>
      <div>
        <nav className="main-nav">
          <p>Bienvenido a EasyMarketplace!</p>
          <ul>
            <li>
              <Link to="/front-page">Pagina Principal</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/user">Usuario</Link>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path="/admin/*" element={<AdminDashboard products={products} setProducts={setProducts} />} />
          <Route path="/user" element={<UserCatalog products={products} />} />
          <Route path="/admin/create-article" element={<CreateArticleForm setProducts={setProducts} />} />
          <Route path="/admin/create-article/edit/:productId" element={<CreateArticleForm products={products} setProducts={setProducts} />} />
          <Route path="/front-page" element={<FrontPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Navigate to="/front-page" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;