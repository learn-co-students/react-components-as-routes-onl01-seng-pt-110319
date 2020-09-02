import React from 'react';
import ReactDOM from 'react-dom'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Messages from './components/Messages'
import SignUp from './components/SignUp'

import { BrowserRouter as Router, Route} from 'react-router-dom';



ReactDOM.render((
 <Router>
  <div>
    <NavBar />
    <Route  path="/" component={Home} />
    <Route exact path="/about" component={About}/>
    <Route exact path="/login" component={Login} />
    <Route exact path="/messages" component={Messages}/>
    <Route exact path="/signup" component={SignUp}/>
  </div>
  </Router>),
  document.getElementById('root')
);
