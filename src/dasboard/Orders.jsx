import React, { useState } from "react";
import { Button, Alert, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashbordProduct.css";
import AddProductForm from './AddProductForm';

const DashbordProduct = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const products = [
    {
      id: 1,
      img: "https://pianocity.com.au/wp-content/uploads/2021/01/05-clp-795gp-color-pe_1dc88dff128b6caf1b1fe648bebdebe2.jpg",
      name: "Piano",
      price: 4999.00,
      description: "High quality digital piano with 88 keys",
      category: "Keyboards",
      stock: 15
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      name: "Guitar",
      price: 8999.00,
      description: "Acoustic guitar with premium wood finish",
      category: "Strings",
      stock: 8
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1571327073757-4b8f7c44ea25?w=400",
      name: "Violin",
      price: 12999.00,
      description: "Professional violin with bow and case",
      category: "Strings",
      stock: 5
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400",
      name: "Drums",
      price: 25999.00,
      description: "Complete drum set with cymbals",
      category: "Percussion",
      stock: 3
    }
  ];

  const handleEdit = (id) => {
    console.log("Edit product:", id);
    // Add edit functionality
  };

  const handleDelete = (id) => {
    console.log("Delete product:", id);
    // Add delete functionality
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };

  return (
    <div className="container-fluid px-2 px-md-3">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
        <h5 className="mb-2 mb-md-0 d-none d-md-block">Product Management</h5>
        <div className="w-100 w-md-auto text-end">
          <Button 
            variant="primary" 
            size="sm" 
            onClick={() => setIsFormOpen(true)}
            className="w-100 w-md-auto"
          >
            Add Product
          </Button>
        </div>
      </div>

      {/* Add Product Form Modal */}
      {isFormOpen && (
        <AddProductForm 
          closeForm={() => setIsFormOpen(false)} 
        />
      )}

      {loading ? (
        <div className="text-center py-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p className="mt-2 small">Loading products...</p>
        </div>
      ) : products.length === 0 ? (
        <Alert variant="info" className="mt-2">
          No products found.
        </Alert>
      ) : (
        <>
          {/* Mobile Cards View */}
          <div className="d-block d-lg-none mt-3">
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-12 col-md-6 mb-3">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-4 col-md-3">
                          <img
                            src={product.img}
                            alt={product.name}
                            className="img-fluid rounded product-image"
                            style={{ 
                              width: '100%', 
                              height: '80px', 
                              objectFit: 'cover' 
                            }}
                          />
                        </div>
                        <div className="col-8 col-md-9">
                          <div className="mb-2">
                            <h6 className="card-title text-dark mb-1">{product.name}</h6>
                            <p className="card-text text-primary fw-bold mb-1">
                              {formatPrice(product.price)}
                            </p>
                            <small className="text-muted d-block mb-1">
                              Category: {product.category}
                            </small>
                            <small className="text-muted d-block mb-2">
                              Stock: {product.stock} units
                            </small>
                          </div>
                          <div className="d-flex gap-2">
                            <button 
                              className="btn btn-sm btn-outline-success flex-fill fw-bold"
                              onClick={() => handleEdit(product.id)}
                            >
                              Edit
                            </button>
                            <button 
                              className="btn btn-sm btn-outline-danger flex-fill fw-bold"
                              onClick={() => handleDelete(product.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="card-text small text-muted mb-0">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="table-responsive mt-3 d-none d-lg-block">
            <table className="table table-hover">
              <thead className="table-dark">
                <tr>
                  <th style={{ minWidth: '80px' }}>Image</th>
                  <th style={{ minWidth: '150px' }}>Name</th>
                  <th style={{ minWidth: '120px' }}>Price</th>
                  <th style={{ minWidth: '200px' }}>Description</th>
                  <th style={{ minWidth: '100px' }}>Category</th>
                  <th style={{ minWidth: '80px' }}>Stock</th>
                  <th style={{ minWidth: '140px' }}>Action</th>
                </tr>
              </thead>
              <tbody className="fw-bold">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        src={product.img}
                        alt={product.name}
                        className="rounded product-image"
                        style={{ 
                          width: '60px', 
                          height: '60px', 
                          objectFit: 'cover' 
                        }}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td className="text-primary">{formatPrice(product.price)}</td>
                    <td>
                      <span 
                        className="d-inline-block text-truncate" 
                        style={{ maxWidth: '200px' }}
                        title={product.description}
                      >
                        {product.description}
                      </span>
                    </td>
                    <td>{product.category}</td>
                    <td>
                      <span className={`badge ${product.stock < 5 ? 'bg-danger' : 'bg-success'}`}>
                        {product.stock}
                      </span>
                    </td>
                    <td>
                      <button 
                        className="btn btn-sm text-success me-2 fw-bold"
                        onClick={() => handleEdit(product.id)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-sm text-danger fw-bold"
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Footer Info */}
      {products.length > 0 && (
        <div className="mt-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
          <small className="text-muted mb-2 mb-md-0">
            Total Products: <strong>{products.length}</strong>
          </small>
          <small className="text-muted">
            Last updated: {new Date().toLocaleTimeString()}
          </small>
        </div>
      )}
    </div>
  );
};

export default DashbordProduct;