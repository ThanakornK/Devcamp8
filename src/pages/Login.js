import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './../styles/Login.css';

export default class Login extends React.Component {
    

        render(){
            function signIn(){
                global.isLoggedIn = 1;
                alert("Login "+global.isLoggedIn)
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