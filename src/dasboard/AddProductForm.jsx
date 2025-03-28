
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddProductForm.css";
import { FaTimes } from "react-icons/fa";

function AddProductForm({ isOpen, closeForm, product }) {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [isChecked, setIsChecked] = useState(product?.newArrival || false);
  const [isChecked1, setIsChecked1] = useState(product?.bestSeller || false);
  const [formData, setFormData] = useState({
    name: product?.name || "",
    price: product?.price || "",
    category: product?.category || "",
    description: product?.description || ""
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        category: product.category,
        description: product.description
      });
      setIsChecked(product.newArrival || false);
      setIsChecked1(product.bestSeller || false);
      if (product.images) {
        setImage1(product.images[0] || null);
        setImage2(product.images[1] || null);
        setImage3(product.images[2] || null);
      }
    }
  }, [product]);

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("newArrival", isChecked);
    formDataToSend.append("bestSeller", isChecked1);

    if (image1) formDataToSend.append("images", image1);
    if (image2) formDataToSend.append("images", image2);
    if (image3) formDataToSend.append("images", image3);

    try {
      if (product) {
        await axios.put(`http://localhost:8000/api/products/edit/${product._id}`, formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Product updated successfully");
      } else {
        await axios.post("http://localhost:8000/api/products/add", formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Product added successfully");
      }
      closeForm();
    } catch (error) {
      console.error("Error submitting product:", error);
      alert("Failed to submit product");
    }
  };

  return (
    <div className={`add-product-form-container ${isOpen ? "open" : ""}`}>
      <div className="add-product-form mx-auto p-4">
        <FaTimes className="close-icon" onClick={closeForm} />
        <h2 className="text-center mb-4">{product ? "Edit Product" : "Add Product"}</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="fw-bold">Product Name:</label>
            <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
          </div>
          <div className="d-flex gap-3">
            <div className="form-group flex-grow-1">
              <label className="fw-bold">Price:</label>
              <input type="text" name="price" className="form-control" value={formData.price} onChange={handleChange} />
            </div>
            <div className="form-group flex-grow-1">
              <label className="fw-bold">Category:</label>
              <input type="text" name="category" className="form-control" value={formData.category} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label className="fw-bold">Description:</label>
            <input type="text" name="description" className="form-control" value={formData.description} onChange={handleChange} />
          </div>
          <div className="d-flex gap-3">
            <div className="form-group flex-grow-1">
              <label className="fw-bold">New Arrival:</label>
              <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
            </div>
            <div className="form-group flex-grow-1">
              <label className="fw-bold">Best Seller:</label>
              <input type="checkbox" checked={isChecked1} onChange={(e) => setIsChecked1(e.target.checked)} />
            </div>
          </div>

          {[image1, image2, image3].map((image, index) => (
            <div key={index} className="image-upload-container">
              <label htmlFor={`file-input-${index + 1}`} className="image-label">
                <div className="image-preview">
                  <img src={image instanceof File ? URL.createObjectURL(image) : image?.url || "https://via.placeholder.com/100"} alt="Preview" />
                </div>
              </label>
              <input
                id={`file-input-${index + 1}`}
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, [setImage1, setImage2, setImage3][index])}
                style={{ display: "none" }}
              />
              <p className="fw-bold">Image {index + 1}</p>
            </div>
          ))}

          <button type="submit" className="btn btn-dark text-light w-100 mt-3 fw-bold">{product ? "Update Product" : "Submit"}</button>
        </form>
      </div>
    </div>
  );
}

export default AddProductForm;




