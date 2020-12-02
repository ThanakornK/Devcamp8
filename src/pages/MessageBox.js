import React from 'react'
import { ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import './../styles/Inbox.css';

export default function MessageBox() {
    return (
        <div  style={{ height:"100vh" }} >
            <ListGroup className="mailContainer">
                <ListGroupItem className="CourseList" onClick={() => { window.location.pathname = '/messageReader' }}>
                    <Container className="list">
                       <div>Title: ตอบกลับเรื่อง วิธีการเลือกซื้อโมเดล</div>
                       <div>Sent by: Carrot Kun</div>
                    </Container>
                </ListGroupItem>

                <ListGroupItem className="CourseList">
                    <Container className="list">
                    <div>Title: ขอบคุณเรื่องที่ช่วยสอนผมในวันนั้น</div>
                    <div>Sent by: ท้องฟ้าตากลม</div>                    
                    </Container>
                </ListGroupItem>
                <ListGroupItem className="CourseList">
                    <Container className="list">
                    <div>Title: ตอบกลับเรื่อง เทียบคุณภาพสีของแต่ละแหล่ง</div>
                    <div>Sent by: Zzง่วงนอนจุงzZ</div>                    
                    </Container>
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}
