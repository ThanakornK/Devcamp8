import React from 'react'
import axios from 'axios'
import url from '../service/apiService'

export default class Register extends React.Component {
    render() {
        return (
            <div>
                <form className="form">
                    <label>Register</label>
                    <br />
                    <div class="form-group">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="inputUserName">UserName</label>
                        <input type="userName" class="form-control" id="name" placeholder="Enter User Name" />
                    </div>
                    <div class="form-group">
                        <label for="inputPassword">Password</label>
                        <input type="password" class="form-control" id="pass1" placeholder="Password" />
                    </div>
                    {/* <div class="form-group">
                        <label for="inputPassword2">Confirm Password</label>
                        <input type="password" class="form-control" id="pass2" placeholder="Confirm Password" />
                    </div> */}
                </form>
                <button class="btn btn-primary" onClick={() => {
                    var formData = new FormData();
                    formData.append("email", document.getElementById('email').value)
                    formData.append("pass", document.getElementById('pass1').value)
                    formData.append("name", document.getElementById('name').value)
                    axios.post(url + '/api/register', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then(res => {
                        console.log(res.data)
                        if (res.data === 'fail') {
                            // send error message
                        }
                        else {
                            // localStorage.setItem('isLogin', 1);
                            // localStorage.setItem('user_id', res.data.id);
                            // window.location.pathname = '/login';
                        }

                    })
                }}>Register</button>
            </div>
        )
    }
}