
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './AddProductForm.css'; 
// import {useState} from 'react';

// function AddProductForm({closeForm}){
//     // const [isOpen, setIsOpen] = useState(true);
//     const [image1, setImage1] = useState(null);
//     const [image2, setImage2] = useState(null);
//     const [image3, setImage3] = useState(null);

//     const handleImageChange = (e, setImage) =>{
//         const file = e.target.files[0];
//         if(file){
//             setImage(URL.createObjectURL(file));
//         }
//     }


//     return (
//         <>
//             <div className={`add-product-form mx-auto p-4 w-50`}>
//                 <h2 className="text-center mb-4 text-primary">Add Product</h2>
//                 <form className="form">
//                     <div className="form-group">
//                         <label>Product Name:</label>
//                         <input type="text" className="form-control" placeholder="Username" />
//                     </div>

//                     <div className="d-flex gap-3">
//                         <div className="form-group flex-grow-1">
//                             <label>Price:</label>
//                             <input type="text" className="form-control" placeholder="price" />
//                         </div>
//                         <div className="form-group flex-grow-1">
//                             <label>Category:</label>
//                             <input type="text" className="form-control" placeholder="category" />
//                         </div>
//                     </div>


//                     <div className="form-group">
//                         <label>Description:</label>
//                         <input type="text" className="form-control" placeholder="description" />
//                     </div>

//                     <div className="d-flex gap-3">
//                         <div className="form-group flex-grow-1">
//                             <label>Best Seller:</label>
//                             <input type="text" className="form-control" placeholder="best seller" />
//                         </div>
//                         <div className="form-group flex-grow-1">
//                             <label>New Arrival:</label>
//                             <input type="number" className="form-control" placeholder="new arrival" />
//                         </div>
//                     </div>

//                     {/* Image Upload Section */}
                   
//                      <div className="image-upload-container">
//       <label htmlFor="file-input1" className="image-label">
//         <div className="image-preview">
//           <img src={image1 || "https://via.placeholder.com/100"} alt="Preview" />
//           <div className="overlay">
//             <i className="fas fa-cloud-upload-alt"></i> 
//           </div>
//         </div>
//       </label>
//       <input
//         id="file-input1"
//         type="file"
//         accept="image/*"
//         onChange={(e) => handleImageChange(e, setImage1)}
//         style={{ display: "none" }}
//       />
//       <p>image 1</p>
//       </div>
//       <div className="image-upload-container">
//       <label htmlFor="file-input2" className="image-label">
//         <div className="image-preview">
//           <img src={image2 || "https://via.placeholder.com/100"} alt="Preview" />
//           <div className="overlay">
//             <i className="fas fa-cloud-upload-alt"></i> 
//           </div>
//         </div>
//       </label>
//       <input
//         id="file-input2"
//         type="file"
//         accept="image/*"
//         onChange={(e) => handleImageChange(e, setImage2)}
//         style={{ display: "none" }}
//       />
//       <p>image 2</p>
//       </div>

//       <div className="image-upload-container">
//       <label htmlFor="file-inpu3" className="image-label">
//         <div className="image-preview">
//           <img src={image3 || "https://via.placeholder.com/100"} alt="Preview" />
//           <div className="overlay">
//             <i className="fas fa-cloud-upload-alt"></i> 
//           </div>
//         </div>
//       </label>
//       <input
//         id="file-inpu3"
//         type="file"
//         accept="image/*"
//         onChange={(e) => handleImageChange(e, setImage3)}
//         style={{ display: "none" }}
//       />
//       <p>image 3</p>
//       </div>

//                  <div className="form-buttons">
//                  <button type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
//                  <button type="submit" className="btn btn-danger w-100 mt-3">Cancel</button>
//                  </div>
                   
//                 </form>
//             </div>
//         </>
//     );
// }

// export default AddProductForm;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddProductForm.css"; 
import { FaTimes } from "react-icons/fa"; // Cross Icon

function AddProductForm({ isOpen, closeForm }) {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);

  const handleImageChange = (e, setImage) => {

    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className={`add-product-form-container ${isOpen ? "open" : ""}`}>
      <div className="add-product-form mx-auto p-4">
        {/* Cross Icon to Close Form */}
        <FaTimes className="close-icon" onClick={closeForm} />

        <h2 className="text-center mb-4">Add Product</h2>
        <form className="form">
          <div className="form-group">
            <label className="fw-bold">Product Name:</label>
            <input type="text" className="form-control" placeholder="Username" />
          </div>

          <div className="d-flex gap-3">
            <div className="form-group flex-grow-1">
              <label className="fw-bold">Price:</label>
              <input type="text" className="form-control" placeholder="price" />
            </div>
            <div className="form-group flex-grow-1">
              <label className="fw-bold">Category:</label>
              <input type="text" className="form-control" placeholder="category" />
            </div>
          </div>

          <div className="d-flex gap-3">
            <div className="form-group flex-grow-1">
              <label className="fw-bold">New Arrival:</label>
              <input
        type="checkbox"
        label="I agree to the terms and conditions"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
            </div>
            <div className="form-group flex-grow-1">
              <label className="fw-bold">Best Seller:</label>
              <input
        type="checkbox"
        label="I agree to the terms and conditions"
        checked={isChecked1}
        onChange={(e) => setIsChecked1(e.target.checked)}
      />
            </div>
          </div>
          

          <div className="form-group">
            <label className="fw-bold">Description:</label>
            <input type="text" className="form-control" placeholder="description" />
          </div>

          {/* Image Upload Section */}
          <div className="image-upload-container">
            <label htmlFor="file-input1" className="image-label">
              <div className="image-preview">
                <img src={image1 || "https://via.placeholder.com/100"} alt="Preview" />
              </div>
            </label>
            <input
              id="file-input1"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, setImage1)}
              style={{ display: "none" }}
            />
            <p className="fw-bold">Image 1</p>
          </div>
          
          <div className="image-upload-container">
      <label htmlFor="file-input2" className="image-label">
       <div className="image-preview">
          <img src={image2 || "https://via.placeholder.com/100"} alt="Preview" />
           <div className="overlay">
            <i className="fas fa-cloud-upload-alt"></i> 
          </div>
        </div>
     </label>
       <input
        id="file-input2"
        type="file"
        accept="image/*"
        onChange={(e) => handleImageChange(e, setImage2)}
        style={{ display: "none" }}
       />
     <p className="fw-bold">image 2</p>
</div>
          
<div className="image-upload-container">
      <label htmlFor="file-inpu3" className="image-label">
        <div className="image-preview">
           <img src={image3 || "https://via.placeholder.com/100"} alt="Preview" />
          <div className="overlay">
            <i className="fas fa-cloud-upload-alt"></i> 
          </div>
        </div>
       </label>
       <input
        id="file-inpu3"
        type="file"
        accept="image/*"
         onChange={(e) => handleImageChange(e, setImage3)}
         style={{ display: "none" }}
       />
       <p className="fw-bold">image 3</p>
     </div>
          <div className="form-buttons">
            <button type="submit" className="btn btn-dark text-light w-100 mt-3 fw-bold">
              Submit
            </button>
            <button type="button" className="btn btn-light text-danger w-100 mt-3 fw-bold" onClick={closeForm}>
              Cancel
            </button>
          </div>
        </form>
      
      </div>
    </div>
  );
}

export default AddProductForm;

