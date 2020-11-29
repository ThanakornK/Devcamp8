import React from 'react';
import './../App.css';
import { Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import Logo from './../images/logo.png';

export default function Menu() {
    return (
      <Navbar style={{backgroundColor:"#FFD800"}} expand="lg">
        <Navbar.Brand href="/">
          <img alt="" src={Logo} width="150" height="50" className="d-inline align-top" />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav >
            <Nav.Link href="#">Join us!</Nav.Link>
            <img src="/images/guest_profile.png" style={{width:"40px", height:"40px"}} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}