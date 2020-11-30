import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

function AlertSendQ() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button onClick={() => setShow(true)}>Send</Button>

            <Alert show={show} variant="success">
                <Alert.Heading>Ask Question</Alert.Heading>
                <p>
                    Your question send to Instructor already.
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

export default AlertSendQ
