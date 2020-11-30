import React from 'react';
import './../styles/MainLib.css';

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
