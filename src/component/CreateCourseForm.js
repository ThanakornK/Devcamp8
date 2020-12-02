import React from 'react';
import { FormControl, InputGroup, Form } from 'react-bootstrap';
import './../styles/CreateCourse.css';

function CreateCourseForm() {
    return (
        <div>
            <InputGroup className="FormInput">
                <FormControl placeholder="Title" />
            </InputGroup>
            <InputGroup className="FormInput">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </InputGroup>
            <InputGroup className="FormInput">
                <FormControl placeholder="Toy Type" />
            </InputGroup>
            <InputGroup className="FormInput">
                <FormControl placeholder="Price" />
            </InputGroup>
            <InputGroup className="FormInput">
                <FormControl placeholder="Description" as="textarea" style={{ marginLeft: "0%" }} />
            </InputGroup>
            <Form>
                <Form.Group style={{ marginLeft: 300 }}>
                    <Form.Label >Upload Course Image</Form.Label>
                    <Form.File id="courseImg" />
                </Form.Group>
            </Form>
        </div>
    )
}

export default CreateCourseForm
