// src/components/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Button, Pagination } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/admin.css';

const ProductItem = ({ product, onDelete, onEditClick }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (product.image instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(product.image);
    } else {
      setImageSrc(product.image);
    }
  }, [product]);

  return (
    <div className="product-item">
      <div className="product-image-container">
        <img src={imageSrc} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <div className="article-btns">
          <Button variant="danger" onClick={() => onDelete(product.id)}>
            Eliminar
          </Button>
          <Button variant="info" onClick={() => onEditClick(product.id)}>
            Editar
          </Button>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = ({ products, setProducts }) => {
  const [activePage, setActivePage] = useState(1);
  const navigate = useNavigate();

  const indexOfLastProduct = activePage * 10;
  const indexOfFirstProduct = indexOfLastProduct - 10;
  const currentProducts = [...products].slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (direction) => {
    if (direction === 'next') {
      setActivePage((prevPage) => Math.min(prevPage + 1, Math.ceil((products.length + 1) / 10)));
    } else if (direction === 'prev') {
      setActivePage((prevPage) => Math.max(prevPage - 1, 1));
    }
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleEditClick = (productId) => {
    navigate(`/admin/create-article/edit/${productId}`);
  };

  return (
    <div className="admin-container">
      <h2>Panel de Administrador</h2>

      <div className="admin-buttons">
        <Link to="/admin/create-article" className="mr-2">
          <Button variant="success">Crear Artículo</Button>
        </Link>

        <Pagination className="pagination-buttons">
          <Pagination.Prev onClick={() => handlePageChange('prev')} disabled={activePage === 1} />
          <Pagination.Next
            onClick={() => handlePageChange('next')}
            disabled={activePage === Math.ceil((products.length + 1) / 10)}
          />
        </Pagination>
      </div>

      <div className="product-list">
        {currentProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={handleDeleteProduct}
            onEditClick={handleEditClick}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
