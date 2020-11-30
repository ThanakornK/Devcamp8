import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './component/Menu';
import Sidebar from './component/Sidebar';
import MainLib from './pages/MainLib';
import MainStore from './pages/MainStore';
import MainHelp from './pages/MainHelp';
import ContentCourse from './pages/ContentCourse';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row , Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Container fluid="true">
          <Row noGutters >
            <Col sm={1.5}><Sidebar /></Col>
            <Col sm>
              <Switch>
                <Route path='/store' component={MainStore} />
                <Route path='/help' component={MainHelp} />
                <Route path='/library' component={MainLib} />
                <Route path='/owned' component={MainLib} />
                <Route exact path='/library' component={MainLib} />
                <Route path='/1' component={ContentCourse} />
              </Switch>
            </Col>
          </Row>
        </Container>


      </BrowserRouter>
    );
  }
}
export default App;
