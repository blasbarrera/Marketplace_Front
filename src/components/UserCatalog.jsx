import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/catalog.css';

const ProductItem = ({ product }) => {
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
      <img src={imageSrc} alt={product.name} style={{ width: '150px', height: '150px' }} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
      </div>
    </div>
  );
};

const UserCatalog = ({ products }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="ContenedorGrande">
      <div className="user-catalog">
        <h2>Catálogo de Productos</h2>
        <div className="product-list">
          {currentProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
        <div className="pagination-buttons">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Anterior
          </button>
          <span>{`Página ${currentPage} de ${totalPages}`}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCatalog;
