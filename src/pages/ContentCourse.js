import React, { Component , useState} from 'react';
import { Button, Container, Card, Row, Col, Modal } from 'react-bootstrap';
import { ContentData } from '../component/ContentData';
import FooterEnrolled from './../component/FooterEnrolled';
import ModalQuestion from '../component/ModalQuestion';
// import Modal from 'react-modal';
import './../styles/ContentCourse.css';


export default class ContentCourse extends React.Component {

    render() {
        return (
            <div>
                <Container >
                    <Row style={{ flexDirection: "column" }}>
                        <h2 style={{ alignSelf: "center", paddingTop: "10px" }}>CourseName:</h2>
                        <h3>by: </h3>
                    </Row>

                    <Row style={{ display: "flex", flexDirection: "column" }}>
                        {ContentData.map((val, key) => {
                            return (
                                <Col>
                                    <div style={{ padding: "20px", margin: "20px" }}>
                                        <Card>
                                            <Card.Img className="imageContent" variant="top" src={val.image} ></Card.Img>
                                            
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
                    <FooterEnrolled />
                </Container>
            </div>
        )
    }
}


