import React from 'react';
import { ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EnrollData } from './../component/EnrollData';
import ContentCourse from './ContentCourse';
import './../styles/CourseList.css';

function Enrolled() {
    return (
        <div style={{ padding: "10px" }}>
            <ListGroup className="CourseList">
                {EnrollData.map((val, key) => {
                    return (
                        <ListGroupItem className="list" onClick={() => { window.location.pathname = val.id }}>
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

export default Enrolled
