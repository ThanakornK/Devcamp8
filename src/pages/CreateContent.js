import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import CreateContentForm from '../component/CreateContentForm';
import './../styles/CreateCourse.css';
import { FormControl, InputGroup } from 'react-bootstrap';
import axios from 'axios'
import url from '../service/apiService'

function CreateContent() {

    const [state, setState] = useState({
        course: [],
        title: '',
        content: ''
    })

    useEffect(() => {
        // console.log(state)
        axios.get(url + `/api/find` + window.location.pathname)
            .then(res => {
                const course = res.data;
                console.log(course);
                setState({
                    ...state,
                    course: course
                })
            })
        // axios.get(url + `/api/getCourse` + window.location.pathname)
        //     .then(res => {
        //         const course = res.data;
        //         console.log(course)
        //         setState({ 
        //             ...state,
        //             course: course 
        //         })
        //     })
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(state.course.id)
        setState({
            ...state,
            [name]: value
        })
    }
    return (
        <div style={{ height: "100vh" }}>
            <h2 className="center">Create Step</h2>

            <Container >
                <Row>
                    <Col>
                        <div>

                            <InputGroup className="FormInput" className="FormInput" >
                                <FormControl placeholder="Title" name='title' id="title" value={state.title} onChange={handleChange} />
                            </InputGroup>
                            <InputGroup className="FormInput" className="FormInput" >
                                <FormControl placeholder="Content" as="textarea" id="content" style={{ marginLeft: "0" }} name='content' value={state.content} onChange={handleChange} />
                            </InputGroup>
                            <label for="profileImg">Upload Content Picture</label>
                            <br />
                            <input type="file" class="form-control-file" id="file" name="file" className="uploadProfileCenter" />

                        </div>
                        {/* <SelectEditContentForm /> */}
                    </Col>
                </Row>
                <Row style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
                    <Button className="center" onClick={() => window.location.pathname = "/editContent/" + state.course.course_id}>Back</Button>
                    <Button className="center" onClick={() => {
                        console.log(state)
                        var formData = new FormData();
                        var imagefile = document.querySelector('#file');
                        formData.append("image", imagefile.files[0]);
                        formData.append("title", state.title)
                        formData.append("content", state.content)
                        formData.append("id", state.course.id)
                        axios.post(url + '/api/send' + window.location.pathname, formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }).then(res => {
                            console.log(res.data)
                        })
                        window.location.pathname = "/library"
                    }}>Confirm</Button>
                </Row>
            </Container>



        </div>
    )
}

export default CreateContent


