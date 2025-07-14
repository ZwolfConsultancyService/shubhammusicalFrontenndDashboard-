import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaHome, FaBox, FaShoppingCart, FaUsers } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, isMobile }) => {
  const location = useLocation();

  // Function to close sidebar and navigate (especially for mobile)
  const handleNavigation = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className={`sidebar bg-light ${isSidebarOpen ? "open" : "closed"} ${isMobile ? 'mobile-sidebar' : ''}`}>
      {/* Header */}
      <div className="sidebar-header d-flex justify-content-between align-items-center p-3">
        <h5 className="fw-bold m-0 fs-6 fs-md-5">
          {isSidebarOpen ? "Dashboard" : ""}
        </h5>
        {isMobile && (
          <FaTimes
            className="text-dark cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>

      {/* Navigation */}
      <Nav className="flex-column">
        {/* Home */}
        <Nav.Item className="mb-1">
          <Link
            to="/"
            className={`nav-link d-flex align-items-center py-2 px-3 ${
              location.pathname === "/home" ? "active" : ""
            }`}
            onClick={handleNavigation}
          >
            <FaHome className="me-2" />
            {isSidebarOpen && <span>Home</span>}
          </Link>
        </Nav.Item>

        {/* Products */}
        <Nav.Item className="mb-1">
          <Link
            to="/products"
            className={`nav-link d-flex align-items-center py-2 px-3 ${
              location.pathname === "/products" ? "active" : ""
            }`}
            onClick={handleNavigation}
          >
            <FaBox className="me-2" />
            {isSidebarOpen && <span>Add Product</span>}
          </Link>
        </Nav.Item>

        {/* Orders */}
        <Nav.Item className="mb-1">
          <Link
            to="/orders"
            className={`nav-link d-flex align-items-center py-2 px-3 ${
              location.pathname === "/orders" ? "active" : ""
            }`}
            onClick={handleNavigation}
          >
            <FaShoppingCart className="me-2" />
            {isSidebarOpen && <span>Orders</span>}
          </Link>
        </Nav.Item>

        {/* Users */}
        <Nav.Item className="mb-1">
          <Link
            to="/users"
            className={`nav-link d-flex align-items-center py-2 px-3 ${
              location.pathname === "/users" ? "active" : ""
            }`}
            onClick={handleNavigation}
          >
            <FaUsers className="me-2" />
            {isSidebarOpen && <span>Users</span>}
          </Link>
        </Nav.Item>

        {/* Logout */}
        <Nav.Item className="mb-1">
          <Link
            to="/logout"
            className={`nav-link d-flex align-items-center py-2 px-3 ${
              location.pathname === "/logout" ? "active" : ""
            }`}
            onClick={handleNavigation}
          >
            <FaTimes className="me-2" />
            {isSidebarOpen && <span>Log Out</span>}
          </Link>
        </Nav.Item>
      </Nav>

      {/* Close Menu Button (Desktop only) */}
      {!isMobile && (
        <div className="mt-auto p-3">
          <p
            className="sidebar-toggle-icon mb-0 small text-muted"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{ cursor: "pointer" }}
          >
            {isSidebarOpen ? "Close Menu" : ""}
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;