import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashbordProduct.css";
import AddProductForm from './AddProductForm';

const DashbordProduct = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  // Fetch products function
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://shubhammusicalplacebackend.onrender.com/api/products/fetch");
      setProducts(response.data.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to fetch products");
      setIsLoading(false);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product function
  const handleDeleteProduct = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      const response = await axios.delete(`https://shubhammusicalplacebackend.onrender.com/api/products/delete/${productId}`);
      
      // Remove the product from local state
      setProducts(products.filter(product => product._id !== productId));
      
      alert("Product deleted successfully");
    } catch (err) {
      console.error("Error deleting product:", err);
      
      // More detailed error logging
      if (err.response) {
        console.error("Error response:", err.response.data);
        console.error("Status code:", err.response.status);
        alert(`Failed to delete product: ${err.response.data.message || 'Unknown error'}`);
      } else if (err.request) {
        console.error("No response received:", err.request);
        alert("No response from server. Please check your network connection.");
      } else {
        console.error("Error setting up request:", err.message);
        alert(`Error: ${err.message}`);
      }
    }
  };

  // Edit product handler
  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setIsEditFormOpen(true);
  };

  // Close form and refresh products
  const handleCloseForm = () => {
    setIsFormOpen(false);
    setIsEditFormOpen(false);
    fetchProducts();
  };

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || product.category?.name === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = [...new Set(products.map(p => p.category?.name).filter(Boolean))];

  // Render loading state
  if (isLoading) {
    return (
      <div className="dashboard-container">
        <div className="loading-container">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="loading-text">Loading products...</p>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="dashboard-container">
        <div className="error-container">
          <div className="error-icon">📦</div>
          <p className="error-text">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="dashboard-title">Product Dashboard</h1>
              <p className="dashboard-subtitle">Manage your musical instruments inventory</p>
            </div>
            <div className="col-md-4 text-md-end">
              <button 
                className="btn btn-primary btn-lg add-product-btn"
                onClick={() => setIsFormOpen(true)}
              >
                <i className="fas fa-plus me-2"></i>
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mt-4">
        {/* Search and Filters */}
        <div className="card filter-card mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="search-box">
                  <i className="fas fa-search search-icon"></i>
                  <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              {/* <div className="col-md-4">
                <div className="filter-box">
                  <i className="fas fa-filter filter-icon"></i>
                  <select
                    className="form-select filter-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div> */}
              {/* <div className="col-md-2">
                <div className="view-toggle">
                  <button
                    className={`btn view-btn ${viewMode === "grid" ? "active" : ""}`}
                    onClick={() => setViewMode("grid")}
                  >
                    <i className="fas fa-th"></i>
                  </button>
                  <button
                    className={`btn view-btn ${viewMode === "list" ? "active" : ""}`}
                    onClick={() => setViewMode("list")}
                  >
                    <i className="fas fa-list"></i>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Products Count */}
        <div className="mb-3">
          <p className="products-count">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Display */}
        {viewMode === "grid" ? (
          <div className="row g-4">
            {filteredProducts.map(product => (
              <div key={product._id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="card product-card">
                  <div className="product-image-container">
                    <img 
                      src={product.images && product.images.length > 0 
                        ? product.images[0].url
                        : "https://via.placeholder.com/400x250"} 
                      alt={product.name}
                      className="card-img-top product-image"
                    />
                    {product.bestSeller && (
                      <span className="best-seller-badge">
                        <i className="fas fa-star"></i> Best Seller
                      </span>
                    )}
                  </div>
                  
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title product-name">{product.name}</h5>
                      <span className="category-badge">
                        {product.category?.name || 'No Category'}
                      </span>
                    </div>
                    
                    <p className="card-text product-description">{product.description}</p>
                    
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="product-price">₹{product.price.toLocaleString()}</span>
                      
                      <div className="action-buttons">
                        <button 
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => handleEditProduct(product)}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDeleteProduct(product._id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="list-view">
            {filteredProducts.map(product => (
              <div key={product._id} className="card product-list-item mb-3">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img 
                        src={product.images && product.images.length > 0 
                          ? product.images[0].url
                          : "https://via.placeholder.com/80x80"} 
                        alt={product.name}
                        className="product-list-image"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="d-flex align-items-center mb-2">
                        <h5 className="product-list-name me-3">{product.name}</h5>
                        {product.bestSeller && (
                          <span className="best-seller-badge-small">
                            <i className="fas fa-star"></i> Best Seller
                          </span>
                        )}
                      </div>
                      <p className="product-list-description">{product.description}</p>
                      <div className="d-flex align-items-center">
                        <span className="product-list-price me-4">₹{product.price.toLocaleString()}</span>
                        <span className="category-badge-small">
                          {product.category?.name || 'No Category'}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-2 text-end">
                      <div className="action-buttons">
                        <button 
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => handleEditProduct(product)}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDeleteProduct(product._id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="no-products-container">
            <div className="no-products-icon">📦</div>
            <h3 className="no-products-title">No products found</h3>
            <p className="no-products-text">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Your existing AddProductForm components */}
      {isFormOpen && (
        <AddProductForm 
          isOpen={isFormOpen} 
          closeForm={handleCloseForm} 
        />
      )}

      {isEditFormOpen && currentProduct && (
        <AddProductForm 
          isOpen={isEditFormOpen}
          closeForm={handleCloseForm}
          product={currentProduct}
        />
      )}
    </div>
  );
};

export default DashbordProduct;