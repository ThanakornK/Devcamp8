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

                <a class="btn btn-primary btn-lg float-right" role="button"
                    onClick={() => {
                        console.log(document.getElementById('img_pro').value)
                        var data = {
                            "img_pro": document.getElementById('img_pro').value,
                            "bio": document.getElementById('bio').value,
                            "img_collect1": document.getElementById('img_collect1').value,
                            "img_collect2": document.getElementById('img_collect2').value,
                            "img_collect3": document.getElementById('img_collect3').value,
                            "img_collect4": document.getElementById('img_collect4').value,
                            "img_collect5": document.getElementById('img_collect5').value,
                            "img_collect6": document.getElementById('img_collect6').value,
                            "img_collect7": document.getElementById('img_collect7').value,
                            "img_collect8": document.getElementById('img_collect8').value,
                            "img_collect9": document.getElementById('img_collect9').value,
                        }
                        console.log(data);
                    }}>Confirm</a>
            </div>
        )
    }
}
