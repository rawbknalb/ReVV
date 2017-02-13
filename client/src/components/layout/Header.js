import React, { Component } from "react";

// React Router
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <Link to="/signin">Sign in</Link>
          </li>         
          <li className="nav-item">
            <Link to="/signup">Sign up</Link>
          </li>                
        </ul>
      </nav>
    );
  }
}

export default Header;
