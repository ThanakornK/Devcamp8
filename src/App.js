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
import CreateContent from './pages/CreateContent';
import EditProfile from './pages/EditProfile';
import Contact from './pages/Contact';
import EditContent from './pages/EditContent';
import SelectEditContent from './pages/SelectEditContent';
import PreviewCourse from './pages/PreviewCourse';
import EditCourse from './pages/EditCourse';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

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
                <Route exact path='/store' component={MainStore} />
                <Route path='/help' component={MainHelp} />
                <Route exact path='/library' component={MainLib} />
                <Route path='/library/:courseId' component={ContentCourse} />
                <Route path='/owned' component={MainLib} />
                <Route exact path='/library' component={MainLib} />
                {/* <Route path='/1' component={ContentCourse} /> */}
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login} />
                <Route path='/profile/:userId' component={UserProfile}/>
                <Route path='/editProfile/:userId' component={EditProfile}/>
                <Route exact path='/' component={MainLib} />
                <Route path='/CreateCourse' component={CreateCourse} />
                <Route path='/CreateContent' component={CreateContent} />
                <Route path='/editContent' component={EditContent} />
                <Route path='/editCourse' component={EditCourse} />
                <Route path='/editSelectContent' component={SelectEditContent} />
                <Route path='/contact' component={Contact}/>
                <Route path='/store/preview/:courseId' component={PreviewCourse} />
              </Switch>
            </Col>
          </Row>
        </Container>


      </BrowserRouter>
    );
  }
}
export default App;
