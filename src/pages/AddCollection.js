import React, { Component } from 'react'
import { InputGroup, FormControl, Form, Button} from 'react-bootstrap';
import axios from 'axios'
import url from '../service/apiService'

export default function AddCollection() {
    return (
        <div>
            <div className="profileHeader">Add Picture to Your Collection</div>
                    <Form>
                        <Form.Group style={{marginLeft:520}}> 
                            <Form.Label>Upload Image</Form.Label>
                            <Form.File id="file"/>
                        </Form.Group>
                    </Form>
                    <Button onClick={() => {
                        var formData = new FormData();
                        var imagefile = document.querySelector('#file');
                        formData.append("image", imagefile.files[0]);
                        formData.append("u_id", localStorage.getItem('user_id'));
                        // console.log(formData) ;
                        axios.post(url+'/api/addCollection', formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }).then(res => {
                            console.log(res.data)
                            window.location.pathname = '/profile/'+localStorage.getItem('user_id') ;
                        })
                    }} style={{marginLeft:520}}>Upload</Button>
        </div>
    )
}
