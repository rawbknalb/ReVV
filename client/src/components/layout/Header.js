import React, { Component } from "react";
import { connect } from "react-redux";

// React Router
import { Link } from "react-router-dom";

class Header extends Component {
  renderAuthNavItems = () => {
    if (this.props.isAuthenticated) {
      // show a link to Sign out
      return (
        <li className="nav-item">
          <Link to="/signout">Sign Out</Link>
        </li>
      );
    } else {
      // show a link to Sign in and Sign up
      return [
        (
          <li className="nav-item" key="sign_in">
            <Link className="nav-link" to="/signin">Sign In</Link>
          </li>
        ),
        (
          <li className="nav-item" key="sign_up">
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
        )
      ];
    }
  };

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          {this.renderAuthNavItems()}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Header);
