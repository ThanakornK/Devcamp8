import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { EnrollData } from './../component/EnrollData';

function Enrolled() {
    return (
        <div style={{ padding: "10px" }}>
            <ListGroup>
                {EnrollData.map((val, key) => {
                    return (
                        <ListGroupItem >
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
