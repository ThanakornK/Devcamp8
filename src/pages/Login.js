import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './../styles/Login.css';
// import {authen} from './../App.js';

export default class Login extends React.Component {
        // constructor(){
        //     super();
        //     this.state={authen:false};
        // }

        render(){
            function signIn(){
                // this.setState({authen:true});
                // alert("Login "+ authen)
         }
            return (
            <form className="form">
                    <label>Sign In</label>
                    <br/>
                <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={signIn}>Sign In</button>
            </form>        
            )
        }
}