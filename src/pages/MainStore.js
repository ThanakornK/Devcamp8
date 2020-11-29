import React from 'react';
import './../styles/MainStore.css';
import { Row, Col } from 'react-bootstrap';

export default class MainStore extends React.Component {
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
