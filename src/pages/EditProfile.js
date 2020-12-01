import React, { Component } from 'react'
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import './../styles/EditProfile.css';

export default class EditProfile extends Component {
    render() {
        return (
            <div>
                <div className="profileHeader">Edit Profile</div>
                <div className="profileImgHolder">
                    <img src="./images/guest_profile.png" className="profileImg"/>
                </div>

                    <Form>
                        <Form.Group style={{marginLeft:520}}> 
                            <Form.Label>Upload Image</Form.Label>
                            <Form.File id="newProfileImg"/>
                        </Form.Group>

                        <Form.Label className="bioHead">Username: PondTHElnwZAAA</Form.Label>

                        <InputGroup className="FormInput">
                            <FormControl as="textarea" placeholder="Enter Your Description" col="50" style={{marginLeft:0}} />
                        </InputGroup>
                    </Form>

  <a class="btn btn-primary btn-lg float-right" href="/profile" role="button">Confirm</a>
            </div>
        )
    }
}
