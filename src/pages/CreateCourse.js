import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import CreateForm from './../component/CreateForm';
import './../styles/CreateCourse.css';

function CreateCourse() {
    return (
        <div style={{ height: "100vh" }}>
            <h2 className="center">Create Course</h2>
            
            <Container >
                <Row>
                    <Col>
                        <CreateForm />
                    </Col>
                </Row>
                <Row style={{display:"flex", justifyContent:"center"}}>
                    <Button className="center">Confirm</Button>
                </Row>
            </Container>
            
            

        </div>
    )
}

export default CreateCourse
