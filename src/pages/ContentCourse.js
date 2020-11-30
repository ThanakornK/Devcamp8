import React, { Component } from 'react';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import { ContentData } from '../component/ContentData';
import './../styles/ContentCourse.css';
import axios from 'axios';
import user from '../testData/userdata'
import url from '../service/apiService'

export default class ContentCourse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: [],
            course: []
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        console.log(params)
        // console.log(axios.get(`http://8cf0d250a525.ngrok.io/api/courses/1`).data)
        axios.get(url+`/api/contents/getByCourseID` + window.location.pathname)
            .then(res => {
                const content = res.data;
                console.log(content);
                this.setState({ content: content });
            })
        console.log(this.state.content);
        axios.get(url+`/api/courses` + window.location.pathname)
            .then(res => {
                const course = res.data;
                console.log(course);
                this.setState({ course: course });
            })
    }


    render() {
        return (
            <div>
                <Container >
                    <h2 style={{ alignSelf: "center" }}>{this.state.course.c_name}</h2>
                    <Row style={{ display: "flex", flexDirection: "column" }}>
                        {this.state.content.map(val =>
                            <Col>
                                <div style={{ padding: "20px", margin: "20px" }}>
                                    <Card>
                                        <Card.Img className="imageContent" variant="top" src={url + val.photo}></Card.Img>
                                        <Card.Body>
                                            <Card.Title>{val.title}</Card.Title>
                                            <Card.Text>
                                                {val.text_content}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        )
    }
}


