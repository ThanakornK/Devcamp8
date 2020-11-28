import React from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Menu from './component/Menu';
import main_course from './pages/Main_course';
import Sidebar from './component/Sidebar';

function App() {

  return (
      <div className="App">
      <Menu />
      <Sidebar />
      </div>

  );
}
export default App;
