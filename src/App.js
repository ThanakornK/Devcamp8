import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './component/Menu';
import Sidebar from './component/Sidebar';
import MainLib from './pages/MainLib';
import MainStore from './pages/MainStore';
import MainHelp from './pages/MainHelp';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row , Col} from 'react-bootstrap';

class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {login:false}
  // }

  // _login = (bool)=>{
  //   this.setState({
  //     login: bool
  //   });
  // }
  
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Container fluid="true">
          <Row noGutters >
            <Col sm={1.5}>
              
            {/* <button onClick={this._login.bind(null, true)}>show</button> */}

              {/* { this.state.login && ( */}
              <Sidebar />
              {/* )} */}
              
              </Col>
            <Col sm>
              <Switch>
                <Route path='/store' component={MainStore} />
                <Route path='/help' component={MainHelp} />
                <Route path='/library' component={MainLib} />
                <Route path='/owned' component={MainLib} />
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login} />
                <Route path='/profile' component={UserProfile}/>
                <Route exact path='/' component={MainLib} />
              </Switch>
            </Col>
          </Row>
        </Container>


      </BrowserRouter>
    );
  }
}
export default App;
