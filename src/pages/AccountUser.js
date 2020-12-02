import React from 'react';
import { Button } from 'react-bootstrap';

function AccountUser() {
    return (
        <div style={{height:"95vh"}}>
            <div style={{border:"2px groove black", height:"20%"}}>
                <div style={{fontSize:"25px", padding:"10px"}}>User account</div>
                <div style={{fontSize:"20px", padding:"10px"}}>XXXXXXXXXXXXX</div>
                <div style={{fontSize:"30px", padding:"10px"}}>SCB Bank</div>
            </div>
            <div>
                <Button >Edit</Button>
            </div>
        </div>
    )
}

export default AccountUser
