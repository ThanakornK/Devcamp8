import React from 'react';
import './../styles/OwnBar.css';
import * as RiIcons from "react-icons/ri";

function EnrollSideBar() {
    return (
        <div className="OwnBar" style={{height:"95vh"}}>
            <ul className="OwnbarList">
                <li className="row"
                // onClick={() => { window.location.pathname = "/:userId/inbox"}}>
                onClick={() => { window.location.pathname = "/messageBox"}}>
                    <div id="icon"><RiIcons.RiInboxArchiveFill /></div> <div id="title">Inbox</div>
                </li>
            </ul>
        </div>
    )
}

export default EnrollSideBar
