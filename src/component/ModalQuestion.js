import React, { Component, useState } from 'react';
import { Modal, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import AlertSendQ from './AlertSendQ';

import './../styles/ModalQuestion.css';

function ModalQuestion() {
    const [show, setShowModal] = useState(false);

    function handleSendModal(){
        setShowModal(false);
        alert("Your question has been posted successfully!");

    }
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    
    return (
        <>
            <Button variant="primary" onClick={handleShowModal}>
                Question?
            </Button>

            <Modal
                show={show}
                onHide={handleCloseModal}
                onHide={handleSendModal}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Question about course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" style={{marginLeft:"10%"}} rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button onClick={handleSendModal}> Send </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalQuestion
