import React from 'react'
import Logo from './../images/logo.png';
import { Navbar, NavbarBrand } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';

function FooterApp() {
    return (
        <div>
            <Navbar sticky="bottom" style={{backgroundColor:"#FFD800"}}>
                <Navbar.Brand >
                    <img alt="" src={Logo} width="150" height="50" className="d-inline align-top" />
                </Navbar.Brand>
                <div>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <div> <AiIcons.AiFillPhone /> </div>
                        <div> Contact us: 090-4956120 </div>  
                    </div>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <div><AiIcons.AiFillMail /></div>
                        <div>E-mail: toy_ground@mail.com</div>
                         
                    </div>
                </div>
            </Navbar>
        </div>
    )
}

export default FooterApp
