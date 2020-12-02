import React from 'react'
import { ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import './../styles/Inbox.css';

export default function Inbox() {
    return (
        <div>
            <ListGroup className="mailContainer">
                <ListGroupItem className="CourseList" onClick={() => { window.location.pathname = '/mailReader' }}>
                    <Container className="list">
                       <div>Title: อยากสอบถามเกี่ยวกับการเริ่มต้นลงสีโมเดล</div>
                       <div>Sent by: NuttyWowZa</div>
                    </Container>
                </ListGroupItem>

                <ListGroupItem className="CourseList">
                    <Container className="list">
                    <div>Title: อยากเริ่มต้นสะสมโมเดล จะเริ่มจากไหนดีคะ</div>
                    <div>Sent by: หนูน้อยหมวกแดง</div>                    
                    </Container>
                </ListGroupItem>
                <ListGroupItem className="CourseList">
                    <Container className="list">
                    <div>Title: อยากหาแหล่งซื้อสีพ่นกันพลาถูกๆ มีที่ไหนแนะนำไหมครับ</div>
                    <div>Sent by: PangSenpai</div>                    
                    </Container>
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}
