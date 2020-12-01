import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import CreateContentForm from '../component/CreateContentForm';
import './../styles/CreateCourse.css';

function CreateContent() {
    return (
        <div style={{ height: "100vh" }}>
            <h2 className="center">Create Content</h2>
            
            <Container >
                <Row>
                    <Col>
                        <CreateContentForm />
                    </Col>
                </Row>
                <Row style={{display:"flex", justifyContent:"center"}}>
                    <Button className="center">Confirm</Button>
                </Row>
            </Container>
            
            

        </div>
    )
}

export default CreateContent
