import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px', 
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none', 
    color: 'white',
  }

class NavBar extends React.Component {
    render() {
        return (
            <div>
            <NavLink 
              to="/"
              exact
              style={link}
              activeStyle={{
                background: 'darkblue'
              }}
              >Home</NavLink>
              <NavLink
              to="/about"
              style={link}
              activeStyle={{
                background: 'darkblue'
              }}
              >About</NavLink>
              <NavLink
              to="/login"
              style={link}
              activeStyle={{
                background: "darkblue"
              }}
              >Login</NavLink>
              <NavLink
              to="/messages"
              style={link}
              activeStyle={{
              background: 'darkblue'
              }}
              >Messages</NavLink>
              <NavLink
              to="/signup"
              style={link}
              activeStyle={{
                background: 'darkblue'
              }}
              >Signup</NavLink>
              </div>
            

        );
    }
}

export default NavBar;