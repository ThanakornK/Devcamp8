import React from 'react';
import './../styles/sidebar.css';
import { SidebarData } from './SidebarData';

function sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            id={window.location.pathname == val.path ? "active" : ""}
                            onClick={() => { window.location.pathname = val.path; }}>
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default sidebar
