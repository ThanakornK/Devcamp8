import React from 'react';
import { ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import { EnrollData } from './../component/EnrollData';
import './../styles/CourseList.css';

export default class Enrolled extends React.Component {
    render() {
        return (
            <div style={{ padding: "10px" }}>
                <ListGroup className="CourseList">
                    {EnrollData.map((val, key) => {
                        return (
                            <ListGroupItem className="list" onClick={() => { window.location.pathname = val.title }}>
                                <div><h4>{val.title}</h4></div>
                                <Container className="DetailCourse" fluid="true">
                                    <div style={{ paddingRight: "10px" }}>Type: {val.type} </div>
                                    <div style={{ paddingRight: "20px" }}>Toy type: {val.toytype}</div>
                                    <div style={{ paddingRight: "5px" }}>by {val.owner}</div>
                                </Container>
                                <div style={{ fontSize: "18px" }}>price: {val.cost} baht</div>
                            </ListGroupItem>
                        )
                    })}
                </ListGroup>
            </div>
        )
    }
}
