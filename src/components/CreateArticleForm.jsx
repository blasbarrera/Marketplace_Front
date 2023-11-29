// src/components/CreateArticleForm.jsx
import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/admin.css';

const initialProduct = {
  name: '',
  description: '',
  price: 0,
  image: null,
};

const CreateArticleForm = ({ products, setProducts }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ ...initialProduct });

  useEffect(() => {
    if (productId) {
      const selectedProduct = products.find((p) => p.id === Number(productId));
      if (selectedProduct) {
        setProduct(selectedProduct);
      }
    }
  }, [productId, products]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image' && files.length > 0) {
      setProduct((prevProduct) => ({ ...prevProduct, [name]: files[0] }));
    } else {
      setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (productId) {
      const updatedProducts = products.map((p) =>
        p.id === Number(productId) ? { ...p, ...product } : p
      );
      setProducts(updatedProducts);
    } else {
      setProducts((prevProducts) => [...prevProducts, { id: prevProducts.length + 1, ...product }]);
    }

    setProduct({ ...initialProduct });
    navigate('/admin');
  };

  return (
    <Container className="admin-container">
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <h2 className="form-header">Información de Artículo</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label className="form-label">Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre"
                name="name"
                value={product.name}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label className="form-label">Descripción de producto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la descripción"
                name="description"
                value={product.description}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label className="form-label">Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el precio"
                name="price"
                value={product.price}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label className="form-label">Adjuntar Imagen</Form.Label>
              <Form.Control
                type="file"
                name="image"
                accept="image/*"
                onChange={handleInputChange}
                className="form-input"
              />
            </Form.Group>

            {/* Botón para retroceder a AdminDashboard */}
            <Link to="/admin">
              <Button variant="secondary" className="mt-3 mr-2">
                Cancelar
              </Button>
            </Link>

            {/* Botón de submit */}
            <Button variant="primary" type="submit" className="mt-3 create-btn">
              {productId ? 'Guardar Cambios' : 'Crear Artículo'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateArticleForm;
