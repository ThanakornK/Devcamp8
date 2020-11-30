import React, { Component } from 'react';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import { ContentData } from '../component/ContentData';
import './../styles/ContentCourse.css';

export default class ContentCourse extends React.Component {
    render() {
        return (
            <div>
                <Container >
                        <h2 style={{alignSelf:"center"}}>CourseName:</h2>
                    <Row style={{ display: "flex", flexDirection: "column" }}>
                        {ContentData.map((val, key) => {
                            return (
                                <Col>
                                    <div style={{ padding: "20px", margin: "20px" }}>
                                        <Card>
                                            <Card.Img className="imageContent" variant="top" src={val.image}></Card.Img>
                                            <Card.Body>
                                                <Card.Title>{val.title}</Card.Title>
                                                <Card.Text>
                                                    {val.content}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}


