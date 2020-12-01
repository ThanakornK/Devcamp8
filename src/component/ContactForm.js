import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './../styles/ContactForm.css';

function CreateForm() {
    return (
        <div>
            <InputGroup className="FormInput">
                <FormControl placeholder="Title" />
            </InputGroup>
            <InputGroup className="FormInput" size="lg">
                <FormControl placeholder="Content" />
            </InputGroup>
            <InputGroup className="FormInput">
                <FormControl placeholder="Contact" />
            </InputGroup>
        </div>
    )
}

export default CreateForm
