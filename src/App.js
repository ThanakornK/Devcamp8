import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './component/Menu';
import Sidebar from './component/Sidebar';
import MainLib from './pages/MainLib';
import MainStore from './pages/MainStore';
import MainHelp from './pages/MainHelp';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Menu />
          <Sidebar />
          <Switch>
            <Route path='/store' component={MainStore} />
            <Route path='/help' component={MainHelp} />
            <Route path='/library' component={MainLib} />
            <Route exact path='/' component={MainLib} />
          </Switch>
        </BrowserRouter>
    );
  }
}
export default App;
