import React from 'react';
import './../styles/MainLib.css';
import LibNav from './../component/LibNav';
import { Row, Col, Container, Nav } from 'react-bootstrap';

function MainLib() {
    return (
        <div className="mainLib" >
            <LibNav />
        </div>
    );
}

export default MainLib;
