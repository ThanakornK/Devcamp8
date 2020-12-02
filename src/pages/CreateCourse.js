import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import CreateCourseForm from '../component/CreateCourseForm';
import './../styles/CreateCourse.css';
import { FormControl, InputGroup } from 'react-bootstrap';
import axios from 'axios'
import url from '../service/apiService'
// import './../styles/CreateCourse.css';

function CreateCourse() {
    const [state, setState] = useState({
        title: '',
        toy_type: '',
        price:'',
        type:''
    })

    // useEffect(() => {
    //     console.log(state)
    //     axios.get(url + `/api`)
    //         .then(res => {
    //             const profile = res.data;
    //             console.log(profile);
    //             this.setState({ profile: profile });
    //         })
    // }, [])

    function sendButtonClick() {
        alert("Your course has been created successfully!");
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    return (
        <div style={{ height: "100vh" }}>
            <h2 className="center">Create Course</h2>

            <Container >
                <Row>
                    <Col>
                        {/* <CreateCourseForm /> */}
                        <div>
                            <InputGroup className="FormInput">
                                <FormControl placeholder="Title" name='title' value={state.title} onChange={handleChange} />
                            </InputGroup>
                            <InputGroup className="FormInput">
                                <FormControl placeholder="Type" name='type' value={state.type} onChange={handleChange} id="type" />
                            </InputGroup>
                            <InputGroup className="FormInput">
                                <FormControl placeholder="Toy Type" name='toy_type' value={state.toy_type} onChange={handleChange} id="toy_type" />
                            </InputGroup>
                            <InputGroup className="FormInput">
                                <FormControl placeholder="Price" name='price' value={state.price} onChange={handleChange} id="price" />
                            </InputGroup>
                            <InputGroup className="FormInput">
                                <FormControl placeholder="Description"  as="textarea" style={{marginLeft:"0%"}}/>
                            </InputGroup>
                            <Form>
                                <Form.Group style={{marginLeft:30}}> 
                                    <Form.Label >Upload Course Image</Form.Label>
                                    <Form.File id="courseImg"/>
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <Row style={{ display: "flex", justifyContent: "center" }}>
                    <Button className="center" onClick={() => {
                        console.log(state)
                        axios.post(url+'/api'+window.location.pathname, state, {
                            // headers: {
                            //     'Content-Type': 'multipart/form-data'
                            // }
                        }).then(res => {
                            console.log(res.data)
                        })
                        window.location.pathname = "/CreateContent"
                    }
                    }>Confirm</Button>
                </Row>
            </Container>



        </div>
    )
}

export default CreateCourse
