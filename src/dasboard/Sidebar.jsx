import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {  FaTimes } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();

  // Function to close sidebar and navigate
  const handleNavigation = () => {
    setIsSidebarOpen(false); // Close sidebar after clicking a menu item
  };

  return (
    <div className={`sidebar bg-light ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="sidebar-header d-flex justify-content-between align-items-center p-3">
        <h5 className="fw-bold m-0 ">Dashboard</h5>
      
      </div>

      <Nav className="flex-column vh-100">
        <Nav.Item>
          {/* <Link 
            to="/home" 
            className={`nav-link  ${location.pathname === "/home" ? "active" : ""}`} 
            onClick={handleNavigation}
          >
            Home
          </Link> */}
        </Nav.Item>

        <Nav.Item>
          <Link 
            to="/products" 
            className={`nav-link ${location.pathname === "/products" ? "active" : ""}`} 
            onClick={handleNavigation}
          >
            Add Product
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link 
            to="/orders" 
            className={`nav-link ${location.pathname === "/orders" ? "active" : ""}`} 
            onClick={handleNavigation}
          >
            Orders
          </Link>
        </Nav.Item>

        <Nav.Item>
          {/* <Link 
            to="/logout" 
            className={`nav-link ${location.pathname === "/logout" ? "active" : ""}`} 
            onClick={handleNavigation}
          >
            Log Out
          </Link> */}
        </Nav.Item>

        <div>   <p
          className="sidebar-toggle-icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{ cursor: "pointer", fontSize: "15px", paddingLeft:"12px" }}
        > Close Menu</p></div>

      </Nav>
    </div>
  );
};

export default Sidebar;
