import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SelectEditContentForm from './../component/SelectEditContentForm';
import './../styles/CreateCourse.css';
import './../styles/EditProfile.css';

function SelectEditContent() {
    return (
        <div style={{ height: "100vh" }}>
            <h2 className="center">Create Course</h2>

            <Container >
                <Row>
                    <Col>
                        <SelectEditContentForm />
                    </Col>
                </Row>
                <Row style={{ display: "flex", justifyContent: "center", flexDirection:"row" }}>
                    <Button className="center" onClick={() => window.location.pathname = "/editContent"}>Back</Button>
                    <Button className="center" onClick={() => window.location.pathname = "/editContent"}>Confirm</Button>
                </Row>
            </Container>



        </div>
    )
}

export default SelectEditContent
