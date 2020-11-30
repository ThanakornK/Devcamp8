import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import CreateForm from './../component/CreateForm';
import './../styles/CreateCourse.css';

function CreateCourse() {
    function sendButtonClick(){
        alert("Your course has been created successfully!");
    }
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
                    <Button className="center" onClick={sendButtonClick}>Confirm</Button>
                </Row>
            </Container>
            
            

        </div>
    )
}

export default CreateCourse
