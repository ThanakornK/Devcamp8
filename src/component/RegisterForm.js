import React, { useEffect, useState } from 'react'
import './../styles/Login.css';
// import {authen} from './../App.js';
import axios from 'axios'
import url from '../service/apiService'


function RegisterForm() {

    const [state, setState] = useState({
        course: [],
        email: '',
        pass: '',
        name:''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(state.course.id)
        setState({
            ...state,
            [name]: value
        })
    }
    return (
        <div>
            <form className="form">
                <label>Register</label>
                <br />
                <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email"
                        name='email' id="email" value={state.email} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="inputUserName">UserName</label>
                    <input type="userName" class="form-control" id="name" placeholder="Enter User Name"
                        name='name' id="name" value={state.name} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" class="form-control" id="pass" placeholder="Password"
                        name='pass' id="pass" value={state.pass} onChange={handleChange} />
                </div>
                {/* <div class="form-group">
                        <label for="inputPassword2">Confirm Password</label>
                        <input type="password" class="form-control" id="pass2" placeholder="Confirm Password" />
                    </div> */}
            </form>
            <div className="loginButton">
                <button class="btn btn-primary" onClick={() => {
                    var formData = new FormData();
                    formData.append("email", state.email)
                    formData.append("pass", state.pass)
                    formData.append("name", state.name)
                    // console.log(formData.data.email ;
                    axios.post(url + '/api/register', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then(res => {
                        console.log(res.data)
                        if (res.data == 'fail') {
                            // send error message
                        }
                        else {
                            // localStorage.setItem('isLogin', 1);
                            // localStorage.setItem('user_id', res.data.id);
                            window.location.pathname = '/login';
                        }

                    })
                }}>Register</button>
            </div>

        </div>
    )
}

export default RegisterForm
