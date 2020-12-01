import React from 'react';
import './../styles/MainHelp.css';
import { Row, Col } from 'react-bootstrap';
import { render } from '@testing-library/react';
import Contact from './../pages/Contact.js';

export default class MainHelp extends React.Component {
    render () {
        return (
            <div>
                <Contact/>
            </div>

        )
    }
}


