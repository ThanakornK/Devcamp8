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
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import CreateCourse from './pages/CreateCourse';
import EditProfile from './pages/EditProfile';
import Contact from './pages/Contact';

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
                <Route exact path='/library' component={MainLib} />
                <Route path='/library/:courseId' component={ContentCourse} />
                <Route path='/owned' component={MainLib} />
                <Route exact path='/library' component={MainLib} />
                {/* <Route path='/1' component={ContentCourse} /> */}
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login} />
                <Route path='/profile/:userId' component={UserProfile}/>
                <Route path='/editProfile' component={EditProfile}/>
                <Route exact path='/' component={MainLib} />
                <Route path='/CreateCourse' component={CreateCourse} />
                <Route path='/contact' component={Contact}/>
              </Switch>
            </Col>
          </Row>
        </Container>


      </BrowserRouter>
    );
  }
}
export default App;
