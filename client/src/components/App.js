import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

// React Router
import { Route, Redirect } from "react-router";

// Components
import Header from "./layout/Header";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import SignOut from "./auth/SignOut";
import Home from "./Home";

class App extends Component {
  redirectWhenAuthd = () => {
    if (this.props.auth.isAuthenticated) {
      return <Redirect push to="/dashboard" />;
    } 
    return <SignIn />
  }

  redirectWhenUnAthd = () => {
    if (!this.props.auth.isAuthenticated) {
      return <Redirect push to="/" />
    } 
    return <SignOut />
  }

  render() {
    const { match } = this.props;
    return (
      <div className="App">
        <Header />
        <Route exact path={match.url} component={Home} />
        <Route path="/signin" render={() => this.redirectWhenAuthd()} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signout" component={SignOut} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(App);
