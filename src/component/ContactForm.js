import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './../styles/ContactForm.css';

function CreateForm() {
    return (
        <div>
            <InputGroup className="FormInput">
                <FormControl placeholder="Title" />
            </InputGroup>
            <InputGroup className="FormInput">
                <FormControl as="textarea" placeholder="What Seems to Be the Problem?" className="contentField"/>
            </InputGroup>
            <InputGroup className="FormInput">
                <FormControl placeholder="How Can We Contact You Back?(e.g. Tel No., Email  )" className="contactField"/>
            </InputGroup>
        </div>
    )
}

export default CreateForm
