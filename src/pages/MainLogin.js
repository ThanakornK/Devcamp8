import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import LoginNav from './../component/LoginNav.js';
import Login from './../pages/Login.js';
import LoginForm from './../component/LoginForm';
import RegisterForm from './../component/RegisterForm';
import { Container } from 'react-bootstrap';
import './../styles/Login.css';



export default class MainLogin extends Component {
    render() {
        return (
            <div style={{height:"100vh"}}>
                <Container style={{ display:"flex", flexDirection:"row", justifyContent:"space-around", marginLeft:"18%", paddingTop:"2%"}}>
                    <div style={{paddingRight:"50px"}}>
                        <LoginForm />
                    </div>
                    <div style={{padding:"15px"}}>
                        <div className="vl"></div>
                    </div>
                    <div>
                        <RegisterForm />
                    </div>
                </Container>
            </div>
        )
    }
}


{/* <LoginNav/> */}
