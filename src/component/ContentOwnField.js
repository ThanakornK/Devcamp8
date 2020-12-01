import React from 'react'
import { ListGroup, ListGroupItem, Container, Button, Row, Col } from 'react-bootstrap'
import { OwnData } from './../component/OwnData';

function ContentOwnField() {
    return (
        <div style={{ padding: "10px", width: "100%" }}>
            <ListGroup className="CourseList">
                {OwnData.map((val, key) => {
                    return (
                        <ListGroupItem className="list">
                            <div><h4>{val.title}</h4></div>
                            <Container className="DetailCourse" fluid="true">
                                <div style={{ paddingRight: "10px" }}>Type: {val.type} </div>
                                <div style={{ paddingRight: "20px" }}>Toy type: {val.toytype}</div>
                                <div style={{ paddingRight: "5px" }}>by {val.owner}</div>
                            </Container>
                            <div style={{ fontSize: "18px" }}>price: {val.cost} baht</div>
                            <div style={{ display:"flex" , flexDirection:"row"}} >
                                <div style={{paddingRight:"10px"}}>
                                    <Button onClick={() => { window.location.pathname = "/editCourse"; }}>Edit Course</Button>
                                </div>
                                <div>
                                    <Button onClick={() => { window.location.pathname = "/editContent"; }}>Edit Content</Button>
                                </div>

                            </div>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </div>
    )
}

export default ContentOwnField
