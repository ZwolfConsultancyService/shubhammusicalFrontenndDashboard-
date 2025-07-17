
// import React,{useState}from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import AddProductForm from "./AddProductForm";

// function DashbordProduct() {
//   return (
//     <div className="main-dashbord container w-100 rounded pt-5 p-4 mt-5 m-2">
  
//       <div className="text-end">
//       <button className="btn btn-primary">
//         Add Product
//       </button>
    
//       </div>
     
//       <div className=" mt-5 das-product-details  border rounded overflow-auto" style={{ maxHeight: "800px", maxWidth: "1000px" }}>
//         <div className="d-flex fw-bold p-2 border-bottom ">
//           <div className="flex-grow-1 product-heading">Images</div>
//           <div className="flex-grow-1 product-heading">Price</div>
//           <div className="flex-grow-1 product-heading">Product Name</div>
//           <div className="flex-grow-1 product-heading">Description</div>
//           <div className="flex-grow-1 product-heading">Action</div>
//         </div>

//         <div className="d-flex align-items-center p-2 border-bottom">
//           <div className="flex-grow-1 d-flex align-items-center">
//             <img
//               src="https://pianocity.com.au/wp-content/uploads/2021/01/05-clp-795gp-color-pe_1dc88dff128b6caf1b1fe648bebdebe2.jpg"
//               alt="User"
//               className="rounded-circle me-2"
//               width="50px" height="50px" 
//             />
//           </div>
//           <div className="flex-grow-1 fw-bold">₹ 4,499.00</div>
//           <div className="flex-grow-1">Piano</div>
//           <div className="flex-grow-1">Lorem ipsum dolor sit</div>
//           <div className="flex-grow-1">
//             <span className="text-success fw-bold me-3">Edit</span>
//             <span className="text-danger fw-bold">Delete</span>
//           </div>
//         </div>

//         <div className="d-flex align-items-center p-2 border-bottom">
//           <div className="flex-grow-1 d-flex align-items-center">
//             <img
//               src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
//               alt="User"
//               className="rounded-circle me-2"
//               width="50px" height="50px" 
//             />
//           </div>
//           <div className="flex-grow-1 fw-bold"> ₹ 9,999.000</div>
//           <div className="flex-grow-1">Guitar</div>
//           <div className="flex-grow-1">Lorem ipsum dolor sit</div>
//           <div className="flex-grow-1">
//             <span className="text-success fw-bold me-3">Edit</span>
//             <span className="text-danger fw-bold">Delete</span>
//           </div>
//         </div>
//       </div>
   
//     </div>
   
//   );
// }

// export default DashbordProduct;


// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import AddProductForm from "../dasboard/AddProductForm";

// function DashbordProduct() {
//   const [isFormOpen, setIsFormOpen] = useState(false); // State to toggle form

//   return (
//     <div className="main-dashbord container w-100 rounded pt-5 p-4 mt-5 m-2">
//       <div className="text-end">
//         <button className="btn btn-primary" onClick={() => setIsFormOpen(true)}>
//           Add Product
//         </button>
//       </div>

//       {/* Show AddProductForm if isFormOpen is true */}
//       {isFormOpen && <AddProductForm closeForm={() => setIsFormOpen(false)} />}

//       <div className="mt-5 das-product-details border rounded overflow-auto" style={{ maxHeight: "800px", maxWidth: "1000px" }}>
//         <div className="d-flex fw-bold p-2 border-bottom ">
//           <div className="flex-grow-1 product-heading">Images</div>
//           <div className="flex-grow-1 product-heading">Price</div>
//           <div className="flex-grow-1 product-heading">Product Name</div>
//           <div className="flex-grow-1 product-heading">Description</div>
//           <div className="flex-grow-1 product-heading">Action</div>
//         </div>

//         {/* Example Product */}
//         <div className="d-flex align-items-center p-2 border-bottom">
//           <div className="flex-grow-1 d-flex align-items-center">
//             <img
//               src="https://pianocity.com.au/wp-content/uploads/2021/01/05-clp-795gp-color-pe_1dc88dff128b6caf1b1fe648bebdebe2.jpg"
//               alt="User"
//               className="rounded-circle me-2"
//               width="50px"
//               height="50px"
//             />
//           </div>
//           <div className="flex-grow-1 fw-bold "><p className="das-product-price">₹ 4,499.00</p></div>
//           <div className="flex-grow-1 "><p className="das-product-name">Piano</p></div>
//           <div className="flex-grow-1 das-product-para"><p className="das-product-para">Lorem ipsum dolor sit</p></div>
//           <div className="col-auto d-flex flex-column">
//                  <span className="mb-2 edit-container text-success fw-bold">Edit</span>
//                   <span className="delete-container text-danger fw-bold">Delete</span>
// </div>
//         </div>

//             {/* Example Product */}
//             <div className="d-flex align-items-center p-2 border-bottom">
//           <div className="flex-grow-1 d-flex align-items-center">
//             <img
//               src="https://pianocity.com.au/wp-content/uploads/2021/01/05-clp-795gp-color-pe_1dc88dff128b6caf1b1fe648bebdebe2.jpg"
//               alt="User"
//               className="rounded-circle me-2"
//               width="50px"
//               height="50px"
//             />
//           </div>
//           <div className="flex-grow-1 fw-bold das-product-prize"> <p>₹ 4,499.00</p></div>
//           <div className="flex-grow-1 das-product-name"> <p> Piano</p></div>
//           <div className="flex-grow-1 das-product-para"><p>Lorem ipsum dolor sit</p></div>
//           <div className="col-auto d-flex flex-column">
//             <span className="mb-2 text-success edit-container fw-bold">Edit</span>
//          <span className="text-danger delete-container fw-bold">Delete</span>
// </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashbordProduct;


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
     

    },
    {
      id: 1,
      img:"https://pianocity.com.au/wp-content/uploads/2021/01/05-clp-795gp-color-pe_1dc88dff128b6caf1b1fe648bebdebe2.jpg",
      Name:"Guitar",
      Price:4999.000,
   

    },
    
  ];

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
      <div className="text-end">
     
       </div>
    
      </div>

      <div className="table-responsive mt-3">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>img</th>
              <th>Name</th>
              <th>Price</th>
           
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="fw-bold">
            {sellers.map((seller) => (
              <tr key={seller.id}>
      
                <td><img src={seller.img} alt="" className="image"/></td>
                <td>{seller.Name}</td>
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

