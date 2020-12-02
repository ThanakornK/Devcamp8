import React from 'react'
import { ListGroup, ListGroupItem, Container, Button, Row } from 'react-bootstrap';
import ModalReply from '../component/ModalReply';
import './../styles/CourseList.css';
import './../styles/MailReader.css';

export default function Inbox() {
    return (
        <div>
            <ListGroup>
                <ListGroupItem>
                    <Container>
                       <div>Title: title</div>
                       <div> Notice me! my senpai!</div>
                       <div>Sent by: Tar Kun</div>
                    </Container>
                </ListGroupItem>
            </ListGroup>

            <Row className="buttonContainer">
                <Button onClick={() => { window.location.pathname = '/inbox' }}>Back</Button>
                <ModalReply/>
            </Row>
        </div>
    )
}
