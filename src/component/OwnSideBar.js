import React from 'react'
import { OwnBarData } from './OwnBarData';
import './../styles/OwnBar.css';

function OwnSideBar() {
    return (
        <div className="OwnBar">
            <ul className="OwnbarList">
                {OwnBarData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            onClick={() => { window.location.pathname = 'createCourse/'+localStorage.getItem('user_id'); }}>
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default OwnSideBar
