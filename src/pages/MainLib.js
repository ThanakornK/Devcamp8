import React from 'react';
import './../styles/MainLib.css';
<<<<<<< HEAD
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

=======

import { Row, Col, Container, Nav } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LibNav from './../component/LibNav';
import Enrolled from './Enrolled';
import Owned from './Owned';

export default class MainLib extends React.Component {
    render () {
        return (
            <div className="mainLib" >
                <LibNav />
                {/* <BrowserRouter>
                    <Switch>
                        <Route path='/library' component={Enrolled} />
                        <Route path='/owned' component={Owned} />
                    </Switch>
                </BrowserRouter> */}
            </div>
    
        );
    }
}
>>>>>>> 99cd01fecc284d3537dad2dafe155b10270e9b02
