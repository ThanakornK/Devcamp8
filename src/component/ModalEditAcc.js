import React, { useState } from 'react'
import { Modal, Button, InputGroup, FormControl, Form } from 'react-bootstrap';

function ModalEditAcc() {
    const [show, setShowModal] = useState(false);

    function handleSendModal() {
        setShowModal(false);
        alert("Your account has been changed successfully!");

    }
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShowModal} style={{ paddingTop: "10px" }}>
                Change
            </Button>

            <Modal
                show={show}
                onHide={handleCloseModal}
                onHide={handleSendModal}
                backdrop="static"
                keyboard={false}
                size="lg">
                <Modal.Header>
                    <Modal.Title style={{ marginLeft: 250 }}>Change Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control style={{ marginLeft: "10%", width: 600 }} placeholder="Account number" />
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


        </div >
    )
}

export default ModalEditAcc
