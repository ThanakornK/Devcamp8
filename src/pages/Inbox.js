import React from 'react'
import { ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import './../styles/CourseList.css';

export default function Inbox() {
    return (
        <div>
            <ListGroup>
                <ListGroupItem className="CourseList" onClick={() => { window.location.pathname = '/mailReader' }}>
                    <Container className="list">
                       <div>Title: title</div>
                       <div>Sent by: Tar Kun</div>
                    </Container>
                </ListGroupItem>

                <ListGroupItem className="CourseList">
                    <Container className="list">
                    <div>Title: title2</div>
                    <div>Sent by: Pond San</div>                    
                    </Container>
                </ListGroupItem>
                <ListGroupItem className="CourseList">
                    <Container className="list">
                    <div>Title: title3</div>
                    <div>Sent by: Pang Senpai</div>                    
                    </Container>
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}
