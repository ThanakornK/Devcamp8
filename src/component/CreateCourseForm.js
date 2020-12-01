import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './../styles/CreateCourse.css';

function CreateCourseForm() {
    return (
        <div>
            <InputGroup className="FormInput">
                <FormControl placeholder="Title" />
            </InputGroup>
            <InputGroup className="FormInput">
                <FormControl placeholder="Type" />
            </InputGroup>
            <InputGroup className="FormInput">
                <FormControl placeholder="Toy Type" />
            </InputGroup>
            <InputGroup className="FormInput">
                <FormControl placeholder="Price" />
            </InputGroup>
        </div>
    )
}

export default CreateCourseForm