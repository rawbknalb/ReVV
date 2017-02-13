import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

// React Router
import { Route, Redirect } from "react-router";

// Components
import Header from "./layout/Header";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Home from "./Home";

class App extends Component {
  // redirectWhenAuthd() {
  //   if (this.props.isAuthenticated) {
  //     return Home;
  //   }
  //   return SignIn;
  // }

  redirectWhenAuthd() {
    if (this.props.auth.isAuthenticated) {
      return <Redirect push to="/home" />;
    }
    return <SignIn />
  }

  render() {
    const { match } = this.props;
    return (
      <div className="App">
        <Header />
        <Route exact path={match.url} component={Home} />
        <Route path="/signin" render={() => this.redirectWhenAuthd()} />
        <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, null)(App);
