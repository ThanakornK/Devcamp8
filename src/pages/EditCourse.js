import React from 'react';
import { InputGroup, FormControl, Button, Container } from 'react-bootstrap';
import './../styles/CreateCourse.css';

function EditCourse() {
    return (
        <div style={{height:"100vh"}}>
            <Container>
                <div className="center" style={{marginLeft:"15px"}}>
                    <h3>Edit Course</h3>
                </div>
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
                    <InputGroup className="FormInput">
                        <FormControl placeholder="Description" as="textarea" style={{marginLeft:"0%"}}/>
                    </InputGroup>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-around" }} >
                    <div>
                        <Button onClick={() => {window.location.pathname = "/editCourse"}}>Back</Button>
                    </div>
                    <div>
                        <Button onClick={() => {window.location.pathname = "/editCourse"}}>Confirm edit</Button>

                    </div>

                </div>
            </Container>



        </div>
    )
}

export default EditCourse
