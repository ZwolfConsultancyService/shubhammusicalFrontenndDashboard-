

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashbordProduct.css";
import AddProductForm from './AddProductForm';
import {useState} from 'react';


const DashbordProduct = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); 
  const sellers = [
    {
      id: 1,
      img:"https://pianocity.com.au/wp-content/uploads/2021/01/05-clp-795gp-color-pe_1dc88dff128b6caf1b1fe648bebdebe2.jpg",
      Name:"Guitar",
      Price:4999.000,
      Description:" this is a guitar ",

    },
    {
      id: 2,
      img:"https://pianocity.com.au/wp-content/uploads/2021/01/05-clp-795gp-color-pe_1dc88dff128b6caf1b1fe648bebdebe2.jpg",
      Name:"Guitar",
      Price:4999.000,
      Description:" this is a guitar ",

    },
    
  ];

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center main-dashbord">
      <div className="text-end">
      <button className="btn btn-outline-dark add-product-button" onClick={() => setIsFormOpen(true)}>
          Add Product
        </button>
       </div>
             {/* Show AddProductForm if isFormOpen is true */}
      {isFormOpen && <AddProductForm closeForm={() => setIsFormOpen(false)} />}
      </div>

      <div className="table-responsive mt-3">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>img</th>
              <th>Name</th>
              <th> Description</th>
              <th>Price</th>
           
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="fw-bold">
            {sellers.map((seller) => (
              <tr key={seller.id}>
      
                <td><img src={seller.img} alt="" className="image"/></td>
                <td>{seller.Name}</td>
                <td>{seller.Description}</td>
                <td>{seller.Price}</td>
                <td>
                  <span className="btn text-success me-2 fw-bold">Edit</span>
                  <span className="btn text-danger fw-bold">Delete</span>
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

