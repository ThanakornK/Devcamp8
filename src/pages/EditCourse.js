import React from 'react';
import { InputGroup, FormControl, Button, Container, Form } from 'react-bootstrap';
import './../styles/CreateCourse.css';
import url from '../service/apiService'
import axios from 'axios';

function EditCourse() {

    const [state, setState] = useState({
        title: '',
        type: '',
        toy_type: '',
        price: '',
        des: '',

    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    return (
        <div style={{ height: "100vh" }}>
            <Container>
                <div className="center" style={{ marginLeft: "15px" }}>
                    <h3>Edit Course</h3>
                </div>
                <div>
                    <InputGroup className="FormInput">
                        <FormControl placeholder="Title" name='title' id="title" value={state.title} onChange={handleChange} />
                    </InputGroup>
                    <InputGroup className="FormInput">
                        <FormControl placeholder="Type" name='type' id="type" value={state.type} onChange={handleChange} />
                    </InputGroup>
                    <InputGroup className="FormInput">
                        <FormControl placeholder="Toy Type" name='toy_type' id="toy_type" value={state.toy_type} onChange={handleChange} />
                    </InputGroup>
                    <InputGroup className="FormInput">
                        <FormControl placeholder="Price" name='price' id="price" value={state.price} onChange={handleChange} />
                    </InputGroup>
                    <InputGroup className="FormInput">
                        <FormControl placeholder="Description" as="textarea" style={{ marginLeft: "0%" }} name='des' id="des" value={state.des} onChange={handleChange} />
                    </InputGroup>
                    <Form>
                        <Form.Group style={{marginLeft:50}}> 
                            <Form.Label>Upload Image</Form.Label>
                            <Form.File id="newCourseImg"/>
                        </Form.Group>
                    </Form>
                </div>
                <br/>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }} >
                    <div>
                        <Button onClick={() => {

                            window.location.pathname = "/editCourse/:CourseId"
                        }}>Back</Button>
                    </div>
                    <div>
                        <Button onClick={() => {
                            console.log(state)
                            var formData = new FormData();
                            var imagefile = document.querySelector('#file');
                            formData.append("image", imagefile.files[0]);
                            formData.append("title", state.title)
                            formData.append("type", state.type)
                            formData.append("toy_type", state.toy_type)
                            formData.append("price", state.price)
                            formData.append("des", state.des)
                            axios.post(url + '/api/send' + window.location.pathname, formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }).then(res => {
                                console.log(res.data)
                            })
                            // window.location.pathname = "/editCourse"
                        }}>Confirm edit</Button>

                    </div>

                </div>
            </Container>



        </div>
    )
}

export default EditCourse
