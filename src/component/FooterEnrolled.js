import React, { Component } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import ModalQuestion from './ModalQuestion';

export class FooterEnrolled extends Component {
    render() {
        return (
            <div>
                <Navbar fixed="bottom" expand="lg">
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav >
                            <ModalQuestion />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default FooterEnrolled
