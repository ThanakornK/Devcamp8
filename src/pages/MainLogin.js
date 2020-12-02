import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import LoginNav from './../component/LoginNav.js';
import Login from './../pages/Login.js';


export default class MainLogin extends Component {
    render() {
        return (
            <div>
                <LoginNav/>
            </div>
        )
    }
}
