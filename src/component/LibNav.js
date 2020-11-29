import React from 'react'
import { Row, Col, Container, Nav } from 'react-bootstrap';

function LibNav() {
    return (
        <div>
            <Nav fill variant="tabs" defaultActiveKey="/library">
                <Nav.Item>
                    <Nav.Link href="/library">Enrolled</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/library/OwnCourse">Owned</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default LibNav
