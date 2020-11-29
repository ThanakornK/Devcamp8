import React from 'react';
import './../styles/MainLib.css';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';


export default class MainLib extends React.Component {

    componentDidMount() {
        axios.get('http://48f341b1b128.ngrok.io/api/courses').then(res => {
            // console.log(res)
            console.log(res.data)
            // this.setState({ persons });
        })
    }

    render() {
        return (
            <div className="mainLib" >
                <h1 >Hello</h1>
            </div>
        )
    }
}

