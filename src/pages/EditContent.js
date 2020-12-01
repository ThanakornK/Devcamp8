import React from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';
import { ContentData } from './../component/ContentData';
import EditContentField from './../component/EditContentField';

function EditContent() {
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
            </Container>
        </div>
    )
}

export default EditContent
