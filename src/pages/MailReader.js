import React from 'react'
import { ListGroup, ListGroupItem, Container, Button, Row, Card } from 'react-bootstrap';
import ModalReply from '../component/ModalReply';
import './../styles/CourseList.css';
import './../styles/MailReader.css';

export default function Inbox() {
    return (
        <div>
            <Card className="mailCard" style={{ width: '50rem' }}>
                <Card.Header className="title">อยากสอบถามเกี่ยวกับการเริ่มต้นลงสีโมเดล</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        สวัสดีครับพี่ <br/>
                        ปกติผมเป็นคนที่ชอบสะสมโมเดลอยู่แล้ว ผมชอบซื้อมาสะสมเป็นประจำ
                        จนพักหลังมาผมเริ่มรู้สึกว่าใรบางแหล่งที่ขายโมเดล คุณภาพสีไม่ค่อยดี
                        บางทีก็ลงสีผิดที่ บางทีสีก็เพี้ยน บางทีจุดตา จุดผมเลยขอบจนทำให้โมเดลพังไปเลยก็มีครับ
                        ผมเลยคิดว่าจะซื้อโมเดลแบบที่ยังไม่ได้ลงสีมา แล้วค่อยลงสีเองเลย แต่ว่า
                        ผมไม่รู้ว่าผมควรจะเริ่มต้นยังไงครับ ผมควรใช้สีอะไรในการระบาย แบบไหนดี
                        ที่จะไม่ทำให้ตัวโมเดลพังและติดอยู่ได้นาน 
                        รวมถึงอุปกรณ์ว่าผมควรจะใช้อะไรช่วยลงสี พู่กันหรือสเปรย์หรืออย่างอื่น
                        ผมจึงอยากได้คำแนะนำครับจากพี่ครับ<br/>
                        ขอบคุณครับ <br/>
                    </ListGroup.Item>
                    <ListGroup.Item>NuttyWowZa</ListGroup.Item>
                </ListGroup>
            </Card>

            <Row className="buttonContainer">
                <Button onClick={() => { window.location.pathname = '/inbox' }}>Back</Button>
                <ModalReply/>
            </Row>
        </div>
    )
}
