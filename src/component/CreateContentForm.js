import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import './../styles/CreateCourse.css';

function CreateContentForm() {
    return (
        <div>
            <InputGroup className="FormInput" className="FormInput" >
                <FormControl placeholder="Title" />
            </InputGroup>
            <InputGroup className="FormInput" className="FormInput" >
                <FormControl placeholder="Content" as="textarea" style={{marginLeft:"0"}}/>
            </InputGroup>
        </div >
    )
}

export default CreateContentForm
