import React from 'react';
import './../styles/OwnBar.css';
import * as RiIcons from "react-icons/ri";

function EnrollSideBar() {
    return (
        <div className="OwnBar" style={{height:"95vh"}}>
            <ul className="OwnbarList">
                <li className="row"
                onClick={() => { window.location.pathname = "/:userId/inbox"}}>
                    <div id="icon"><RiIcons.RiInboxArchiveFill /></div> <div id="title">กล่องข้อความ</div>
                </li>
            </ul>
        </div>
    )
}

export default EnrollSideBar
