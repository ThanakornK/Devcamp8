import React from 'react'
import { ListGroup, ListGroupItem, Container, Button, Row, Card } from 'react-bootstrap';
import ModalReply from '../component/ModalReply';
import './../styles/CourseList.css';
import './../styles/MailReader.css';

export default function MessageReader() {
    return (
        <div style={{ height:"100vh" }}>
            <Card className="mailCard" style={{ width: '50rem' }}>
                <Card.Header className="title">ตอบกลับเรื่อง วิธีการเลือกซื้อโมเดล</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        สวัสดีครับ <br/>
                        รายละเอียดยิบย่อยเยอะมาก รบกวนทักหลังไมค์มาเลยครับจุดๆนี้ discord: CarrotKunZZZ<br/>
                    </ListGroup.Item>
                    <ListGroup.Item>Carrot Kun</ListGroup.Item>
                </ListGroup>
            </Card>

            <Row className="buttonContainer">
                <Button onClick={() => { window.location.pathname = '/messageBox' }}>Back</Button>
                <ModalReply/>
            </Row>
        </div>
    )
}
