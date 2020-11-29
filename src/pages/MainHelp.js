import React from 'react';
import './../styles/MainHelp.css';
import { Row, Col } from 'react-bootstrap';
import { render } from '@testing-library/react';

<<<<<<< HEAD

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
=======
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


>>>>>>> 99cd01fecc284d3537dad2dafe155b10270e9b02
