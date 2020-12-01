import React, { Component } from 'react'
import { InputGroup, FormControl, Form, Button} from 'react-bootstrap';
export default function AddCollection() {
    return (
        <div>
            <div className="profileHeader">Add Picture to Your Collection</div>
                    <Form>
                        <Form.Group style={{marginLeft:520}}> 
                            <Form.Label>Upload Image</Form.Label>
                            <Form.File id="newProfileImg"/>
                        </Form.Group>
                    </Form>
                    <Button style={{marginLeft:520}}>Upload</Button>
        </div>
    )
}
