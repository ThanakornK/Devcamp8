import React from 'react';
import './../styles/MainHelp.css';
import { Row, Col } from 'react-bootstrap';


function MainHelp() {

    // axios.get('/api/courses/1')
    
    return (
        <div>
            <Row style={{border:"1px black"}}>
                <Col> test1
                </Col>
            </Row>
        </div>
    )
}

// componentDidMount() {
//     fetch('http://48f341b1b128.ngrok.i/api/courses/1').then(response => response.json())
//       .then(data => console.log(data));;
//   }

export default MainHelp
