import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './../styles/Login.css';
// import {authen} from './../App.js';
import axios from 'axios'
import url from '../service/apiService'

export default class Login extends React.Component {
    // constructor(){
    //     super();
    //     this.state={authen:false};
    // }

    render() {
        function signIn() {
            // this.setState({authen:true});
            // alert("Login "+ authen)
        }
        return (
            <div style={{height:"100vh"}}>
                <form className="form">
                    <label style={{marginLeft:"8%"}}>Sign In</label>
                    <br />
                    <div class="form-group">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="inputPassword">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password" />
                    </div>

                </form>
                <div  className="loginButton">
                <button class="btn btn-primary" onClick={() => {
                    var formData = new FormData();
                    formData.append("email", document.getElementById('email').value)
                    formData.append("pass", document.getElementById('password').value)
                    axios.post(url + '/api/login', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then(res => {
                        console.log(res.data)
                        if (res.data == 'fail') {
                            // send error message
                            alert("Email or Password is Incorrect, Please Enter Again!");
                            document.getElementById('email').value = "";
                            document.getElementById('password').value = "";
                        }
                        else {
                            localStorage.setItem('isLogin', 1);
                            localStorage.setItem('user_id', res.data.id);
                            window.location.pathname = '/library';
                        }

                    })
                }}>Sign In</button>
                </div>
            </div>
        )
    }
}