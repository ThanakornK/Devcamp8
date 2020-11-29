import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { EnrollData } from './../component/EnrollData';
import './../styles/CourseList.css';

function Enrolled() {
    return (
        <div style={{ padding: "10px" }}>
            <ListGroup className="CourseList">
                {EnrollData.map((val, key) => {
                    return (
                        <ListGroupItem className="list" onClick={() => {window.location.pathname = val.title}}>
                            <div>{val.title}</div>
                            <div>by {val.owner}</div>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </div>
    )
}

export default Enrolled
