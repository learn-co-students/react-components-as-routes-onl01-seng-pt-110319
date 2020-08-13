import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Navbar from './navBar';

const navStyle = {
  margin: '30px 0 30px 0',
};

ReactDOM.render(
  <Router>
    <div>
      <div style={navStyle}>
      <Navbar/>
      </div>
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
