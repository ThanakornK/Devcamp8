import React from 'react'
import { Row, Col, Container, Nav, ToggleButton, Tab, Tabs } from 'react-bootstrap';
import classnames from 'classnames';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './../pages/Login';
import Register from './../pages/Register';

export default class LoginNav extends React.Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="signin" >
                    <Tab eventKey="signin" title="Sign In" >
                        <Login />
                        
                    </Tab>
                    <Tab eventKey="Register" title="Register">
                        <Register />
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
}
