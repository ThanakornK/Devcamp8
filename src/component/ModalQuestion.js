import React, { Component, useState } from 'react';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import AlertSendQ from './AlertSendQ';

import './../styles/ModalQuestion.css';

function ModalQuestion() {
    const [show, setShowModal] = useState(false);

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
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Question about course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup size="lg">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Question</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button onClick={handleCloseModal}> Send </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalQuestion
