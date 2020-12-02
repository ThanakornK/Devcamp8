import React, { Component } from 'react'
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import './../styles/EditProfile.css';
import axios from 'axios'
import url from '../service/apiService'
import userData from '../testData/userdata'

export default class EditProfile extends Component {
    render() {
        return (
            <div>
                <div className="profileHeader">Edit Profile</div>
                <div className="profileImgHolder">
                    {/* <img src="./images/guest_profile.png" className="profileImg" /> */}
                </div>

                <Form>
                    <Form.Group style={{ marginLeft: 520 }}>
                        <Form.Label>Upload Image</Form.Label>
                        <br/>
                        <input type="file" id="file" name="file" />
                    </Form.Group>

                    <Form.Label className="bioHead">Username: {localStorage.getItem('username')}</Form.Label>

                    <InputGroup className="FormInput">
                        <FormControl as="textarea" placeholder="Enter Your Description" col="50" style={{ marginLeft: 0 }} id="bio"/>
                    </InputGroup>
                </Form>

                <a class="btn btn-primary btn-lg float-right" href={'/profile/'+localStorage.getItem('user_id')}  role="button"
                    onClick={() => {
                        var formData = new FormData();
                        var imagefile = document.querySelector('#file');
                        formData.append("image", imagefile.files[0]);
                        formData.append("bio", document.getElementById('bio').value);
                        // console.log(formData) ;
                        axios.post(url+'/api'+window.location.pathname, formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }).then(res => {
                            console.log(res.data)
                        })
                        // href={'/profile/'+localStorage.getItem('user_id')}
                        // console.log(temp)
                    }}>Confirm</a>
            </div>
        )
    }
}
