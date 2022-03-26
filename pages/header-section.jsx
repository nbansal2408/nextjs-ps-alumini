import React, { useEffect, useState } from "react";
import * as _ from 'lodash';
import { Button, Card, ListGroup, Nav, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderSection = () => {

  const [showSidebar, useShowSidebar] = useState(false);

  const handleClose = () => {
    useShowSidebar(false);
  }

  const handleShow = () => {
    useShowSidebar(true);
  }

  return (
    <div className="header">
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
          <FontAwesomeIcon icon="bars" size="lg" style={{ padding: 10 }} onClick={handleShow} />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="home" className="nav-link">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="people">People</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="blogs">Blogs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="events">Events</Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ float: 'right!important' }}>
          <Nav.Link eventKey="Referrals" >
            Refer
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Offcanvas show={showSidebar} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>PS Alumni</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="sidebar-menu">Profile</ListGroup.Item>
                <ListGroup.Item className="sidebar-menu">About</ListGroup.Item>
                <ListGroup.Item className="sidebar-menu">Logout</ListGroup.Item>
              </ListGroup>
            </Offcanvas.Body>
          </Offcanvas>
      <style>{`
        .header {
          background: #38CFD9;
          color: #23424A; 
        }
        .sidebar-menu {
          cursor: pointer;
          transition: color .3s ease-in-out;
        }
        .sidebar-menu:hover {
          color: grey;
        }
        .nav-link {
          color: white;
          font-weight: 600;
        }
        `}</style>
    </div>
  )
}




