import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import './../styles/CreateCourse.css';
import './../styles/EditProfile.css';

function CreateContentForm() {
    return (
        <div>
            <InputGroup className="FormInput" className="FormInput" >
                <FormControl placeholder="Title" />
            </InputGroup>
            <InputGroup className="FormInput" className="FormInput" >
                <FormControl placeholder="Content" as="textarea" style={{ marginLeft: "0" }} />
            </InputGroup>
            <InputGroup className="FormInput" className="FormInput" >
                <FormControl placeholder="Content" as="textarea" style={{ marginLeft: "0" }} />
            </InputGroup>
            <label for="profileImg">Upload Content Picture</label>
            <br />
            <input type="file" class="form-control-file" id="profileImg" className="uploadProfileCenter" />
        </div >
    )
}

export default CreateContentForm
