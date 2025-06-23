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
    try {
      const response = await axios.delete(`https://shubhammusicalplacebackend.onrender.com/api/products/delete/${productId}`);
      
      // Remove the product from local state
      setProducts(products.filter(product => product._id !== productId));
      
      alert("Product deleted successfully");
    } catch (err) {
      console.error("Error deleting product:", err);
      
      // More detailed error logging
      if (err.response) {
        // The request was made and the server responded with a status code
        console.error("Error response:", err.response.data);
        console.error("Status code:", err.response.status);
        alert(`Failed to delete product: ${err.response.data.message || 'Unknown error'}`);
      } else if (err.request) {
        // The request was made but no response was received
        console.error("No response received:", err.request);
        alert("No response from server. Please check your network connection.");
      } else {
        // Something happened in setting up the request
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

  // Render loading state
  if (isLoading) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="container mt-4 text-center text-danger">
        {error}
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center main-dashbord">
        <div className="text-end add-product-button">
          <button 
            className="btn btn-outline-dark " 
            onClick={() => setIsFormOpen(true)}
          >
            Add Product
          </button>
        </div>  
    
        {/* Show AddProductForm if isFormOpen is true */}
        {isFormOpen && (
          <AddProductForm 
            isOpen={isFormOpen} 
            closeForm={handleCloseForm} 
          />
        )} 

        {/* Show EditProductForm if isEditFormOpen is true */}
        {isEditFormOpen && currentProduct && (
          <AddProductForm 
            isOpen={isEditFormOpen}
            closeForm={handleCloseForm}
            product={currentProduct}
          />
        )} 
      </div>

      <div className="table-responsive mt-5">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Best Seller</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="fw-bold">
            {products.map((product) => (
              <tr key={product._id}>
                <td>
                  <img 
                    src={product.images && product.images.length > 0 
                      ? product.images[0].url
                      : "https://via.placeholder.com/100"} 
                    alt={product.name} 
                    className="image"
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>₹{product.price.toLocaleString()}</td>
                <td>{product.category?.name || 'No Category'}</td>
                <td>{product.bestSeller ? 'Yes' : 'No'}</td>
                <td>
                  <span 
                    className="btn text-success me-2 fw-bold"
                    onClick={() => handleEditProduct(product)}
                  >
                    Edit
                  </span>
                  <span 
                    className="btn text-danger fw-bold"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashbordProduct;