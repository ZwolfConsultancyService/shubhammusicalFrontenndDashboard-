import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";
import "./Dashbord.css";

const Dashbord = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Auto-close sidebar on mobile
      if (mobile) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Get page title
  const getPageTitle = () => {
    const path = location.pathname.replace("/", "");
    return path.charAt(0).toUpperCase() + path.slice(1) || "Home";
  };

  return (
    <Container fluid className="p-0">
      <Row className="g-0">
        {/* Sidebar */}
        <Col 
          xs={isSidebarOpen ? 12 : 0} 
          md={isSidebarOpen ? 3 : 1} 
          lg={isSidebarOpen ? 2 : 1} 
          id="sidebar-wrapper"
          className={`${isMobile && isSidebarOpen ? 'position-fixed' : ''}`}
          style={{ 
            zIndex: isMobile ? 1050 : 'auto',
            height: isMobile ? '100vh' : 'auto'
          }}
        >
          <Sidebar 
            isSidebarOpen={isSidebarOpen} 
            setIsSidebarOpen={setIsSidebarOpen}
            isMobile={isMobile}
          />
        </Col>

        {/* Main Content */}
        <Col 
          xs={12} 
          md={isSidebarOpen ? 9 : 11} 
          lg={isSidebarOpen ? 10 : 11} 
          id="page-content-wrapper"
          className={`${isMobile && isSidebarOpen ? 'position-relative' : ''}`}
        >
          {/* Mobile Overlay */}
          {isMobile && isSidebarOpen && (
            <div 
              className="position-fixed w-100 h-100 bg-dark opacity-50"
              style={{ zIndex: 1040 }}
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Header */}
          <div className="px-3 py-2 px-md-4 py-md-3">
            <div className="dashboard-heading d-flex align-items-center">
              <FaBars
                size={isMobile ? 20 : 25}
                className="me-2 me-md-3 cursor-pointer dashboard-page-icon"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                style={{ cursor: "pointer" }}
              />
              <h3 className="mb-0 fs-4 fs-md-3">
                <span className="d-none d-md-inline">Dashboard - </span>
                {getPageTitle()}
              </h3>
            </div>
          </div>

          {/* Page Content */}
          <div className="px-2 px-md-3">
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashbord;