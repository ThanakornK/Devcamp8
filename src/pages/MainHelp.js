import React from 'react';
import './../styles/MainHelp.css';
import { Row, Col } from 'react-bootstrap';
import { render } from '@testing-library/react';

export default class MainHelp extends React.Component {
    render () {
        return (
            <div>
                <Row style={{border:"1px black"}}>
                    <Col> test1
                    </Col>
                </Row>
            </div>
        )
    }
}


