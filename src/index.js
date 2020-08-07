import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Messages from './components/Messages'

import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
  <Router>
    <div>
      <Navbar /><br/><br/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/messages" component={Messages}/>
    </div>
  </Router>),
  document.getElementById('root')
);
