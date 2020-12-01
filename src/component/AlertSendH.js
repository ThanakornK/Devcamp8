import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

function AlertSendH() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button onClick={() => setShow(true)}>Send</Button>

            <Alert show={show} variant="success">
                <Alert.Heading>Contact Us</Alert.Heading>
                <p>
                    Message sent to Admin successfully!
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close
                    </Button>
                </div>
            </Alert>
        </>
    );
}

export default AlertSendH
