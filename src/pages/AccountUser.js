import React from 'react';
import { Button } from 'react-bootstrap';
import ModalEditAcc from './../component/ModalEditAcc';

function AccountUser() {
    return (
        <div style={{height:"95vh", padding:"10px"}}>
            <div style={{border:"2px groove black", height:"20%"}}>
                <div style={{fontSize:"25px", padding:"10px"}}>User account</div>
                <div style={{fontSize:"20px", padding:"10px"}}>012-2-61123-1</div>
                <div style={{fontSize:"25px", padding:"10px"}}>SCB Bank</div>
            </div>
            <div style={{paddingTop:"10px"}}>
                <ModalEditAcc />
            </div>
        </div>
    )
}

export default AccountUser
