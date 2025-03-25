import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";
import "./Dashbord.css";

const Dashbord = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Container fluid>
      <Row>
        <Col xs={isSidebarOpen ? 2 : 1} id="sidebar-wrapper">
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        </Col>

        <Col xs={isSidebarOpen ? 10 : 11} id="page-content-wrapper">
          <div className="d-flex align-items-center my-3">
            <FaBars 
              size={25} 
              className="me-3 cursor-pointer dashboard-page-icon" 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
              style={{ cursor: "pointer" }} 
            />
            <h3 className="dashboard-page-heading">Dashboard - {location.pathname.replace("/", "") || "Home"}</h3>
          </div>

          {/* Renders the selected route component */}
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashbord;
