import React from 'react';
import './../App.css';
import { Button, Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from './../images/logo.png';

export default class Menu extends React.Component {

  render() {
    if(localStorage.getItem('isLogin') == 1){
      return (
        <Navbar style={{ backgroundColor: "#FFD800" }} expand="lg">
          <Navbar.Brand >
            <img alt="" src={Logo} width="150" height="50" className="d-inline align-top" />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav >
              <NavDropdown title="Username">
                <NavDropdown.Item href={"/profile/" + localStorage.getItem('user_id')}>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                  localStorage.setItem('user_id', 0);
                  localStorage.setItem('isLogin', 0)
                  window.location.pathname = '/login'
                }}>Log out</NavDropdown.Item>
              </NavDropdown>

              <img src="/images/guest_profile.png" style={{ width: "40px", height: "40px" }} />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
    }
    return (
      <Navbar style={{ backgroundColor: "#FFD800" }} expand="lg">
          <Navbar.Brand href="/library">
            <img alt="" src={Logo} width="150" height="50" className="d-inline align-top" />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            {/* <Nav >
              <NavDropdown title="Username">
                <NavDropdown.Item href={"/profile/" + localStorage.getItem('user_id')}>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                  localStorage.setItem('user_id', 0);
                  localStorage.setItem('isLogin', 0)
                  window.location.pathname = '/login'
                }}>Log out</NavDropdown.Item>
              </NavDropdown>

              <img src="/images/guest_profile.png" style={{ width: "40px", height: "40px" }} />
            </Nav> */}
          </Navbar.Collapse>
        </Navbar>
    )
    
      
  }

  
}