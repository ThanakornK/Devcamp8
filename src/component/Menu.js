import React from 'react';
import './../App.css';
import { Button, Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from './../images/logo.png';

export default class Menu extends React.Component {
    render () {
      return (
        <Navbar style={{backgroundColor:"#FFD800"}} expand="lg">
          <Navbar.Brand href="/library">
            <img alt="" src={Logo} width="150" height="50" className="d-inline align-top" />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav >
              <NavDropdown title="Username">
              <NavDropdown.Item href="/profile/1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/profile/1">Log out</NavDropdown.Item>
              </NavDropdown>
              
              <img src="/images/guest_profile.png" style={{width:"40px", height:"40px"}} />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
}