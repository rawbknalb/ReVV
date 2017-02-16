import React, { Component } from "react";
import { connect } from "react-redux";
//import { AUTH_USER } from "../store/actions/types";
import "../App.css";

// React Router
import { Route, Redirect } from "react-router";

// Components
import Header from "./layout/Header";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Dashboard from "./Dashboard";
import Home from "./Home";

class App extends Component {
  // componentWillMount = () => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     this.props.dispatch({ type: AUTH_USER });
  //   }
  // };

  redirectAfterAuth = () => {
    if (this.props.auth.isAuthenticated) {
      return <Redirect push to="/dashboard" />;
    } else
      return <SignIn />;
  };

  redirectWhenAuthd = component => {
    if (this.props.auth.isAuthenticated) {
      return <Redirect push to="/dashboard" />;
    } else
      return component;
  };

  redirectWhenUnAthd = () => {
    if (!this.props.auth.isAuthenticated) {
      return <Redirect push to="/" />;
    }
  };

  render() {
    const { match } = this.props;
    return (
      <div>
        <Header />
        <div className="App">
          <Route exact path={match.url} component={Home} />
          <Route path="/signin" render={() => this.redirectAfterAuth()} />
          <Route
            path="/signup"
            render={() => this.redirectWhenAuthd(<SignUp />)}
          />
          <Route path="/signout" render={() => this.redirectWhenUnAthd()} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(App);
