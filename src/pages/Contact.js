import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ContactForm from './../component/ContactForm.js';
function Contact(){
    function sendButtonClick(){
        alert("Your message has been sent to Admin successfully!");
    }
        return (
            <div  style={{ height: "100vh" }}>
                <h2 className="center">Contact Us</h2>
                <Container >
                <Row>
                    <Col>
                        <ContactForm />
                    </Col>
                </Row>
                <Row style={{display:"flex", justifyContent:"center"}}>
                    <Button className="center" onClick={sendButtonClick}>Send</Button>
                </Row>
            </Container>
            </div>
        )
}

export default Contact
