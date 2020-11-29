import React from 'react'
import { Row, Col, Container, Nav, ToggleButton, Tab, Tabs } from 'react-bootstrap';
import classnames from 'classnames';

import Enrolled from './../pages/Enrolled';
import Owned from './../pages/Owned';
import './../styles/LibNav.css';

function LibNav() {
    return (
        <div>
            <Tabs defaultActiveKey="enrolled" >
                <Tab eventKey="enrolled" title="Enrolled" >
                    <Enrolled />
                </Tab>
                <Tab eventKey="owned" title="Owned">
                    <Owned />
                </Tab>
            </Tabs>

            {/* <Nav fill variant="tabs" defaultActiveKey="enrolled">
                <Nav.Item>
                    <Nav.Link 
                    eventKey="enrolled"
                    >Enrolled</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                    eventKey="owned"
                    >Owned
                    </Nav.Link>
                </Nav.Item>
            </Nav> */}
        </div>
    )
}

export default LibNav
