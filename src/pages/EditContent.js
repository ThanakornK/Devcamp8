import React from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';
import { ContentData } from './../component/ContentData';
import EditContentField from './../component/EditContentField';
import './../styles/ContentCourse.css';
import url from '../service/apiService'
import { useEffect, useState } from 'react'
import axios from 'axios'

function EditContent() {
    const [content, setContent] = useState([])
    const [course, setCourse] = useState([])

    useEffect(() => {
        // console.log(state)
        axios.get(url + `/api` + window.location.pathname)
            .then(res => {
                const content = res.data;
                console.log(content);
                setContent(content)
            })
        axios.get(url + `/api/getCourse` + window.location.pathname)
            .then(res => {
                const course = res.data;
                console.log(course)
                setCourse(course)
            })
    }, [])

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setState({
    //         ...state,
    //         [name]: value
    //     })
    // }

    return (
        <div >
            <Container>
                <Row style={{ flexDirection: "column" }}>
                    <h2 style={{ alignSelf: "center", paddingTop: "10px" }}>{course.c_name}</h2>
                    <h3>by: {course.c_owner}</h3>
                </Row>

                <Row style={{ display: "flex", flexDirection: "column" }}>
                    {content.map((val, key) => {
                        return (
                            <Col>
                                <div style={{ padding: "20px", margin: "20px" }}>
                                    <Card>
                                        <Card.Img className="imageContent" variant="top" src={url + val.photo} ></Card.Img>

                                        <Card.Body>
                                            <Card.Title>{val.title}</Card.Title>
                                            <Card.Text>
                                                {val.text_content}
                                            </Card.Text>
                                            <Button onClick={() => { window.location.pathname = "/editSelectContent/"+val.id }}>Edit</Button>
                                        </Card.Body>
                                    </Card>

                                </div>
                            </Col>
                        )
                    })}
                </Row>  
                <Row style={{ flexDirection: "column" }}>
                    <div style={{alignSelf:"center", paddingBottom:"10px"}}>
                        <Button onClick={() => {window.location.pathname = "/CreateContent"}}>Add Content</Button>
                    </div>
                </Row>
                    
                
            </Container>
                    
        </div>
    )
}

export default EditContent
