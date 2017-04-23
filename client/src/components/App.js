import React, { Component } from "react";
import { connect } from "react-redux";

// Style
import "../global-styles";

// React Router
import { Route, Redirect } from "react-router";
import ProtectedRoute from "./routes/ProtectedRoute";

// Components
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import { VVLogo } from "./style/Logo";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Dashboard from "./dashboard/Dashboard";
import Home from "./Home";
import Wertentwicklung from "./Wertentwicklung";

class App extends Component {
  // redirectAfterAuth = () =>
  // If user is authenticated and calls /sign
  // this.isAuthenticated ? <Redirect push to="/dashboard" /> : <SignIn />;

  redirectWhenAuthd = component =>
    (this.props.isAuthenticated
      ? <Redirect push to="/dashboard" />
      : component);

  redirectWhenUnAthd = () =>
    !this.props.isAuthenticated && <Redirect push to="/" />;

  render() {
    const { match } = this.props;
    return (
      <div>
        {/* <Hero /> */}
        <div>
          <Route exact path={match.url} component={Home} />
          <Route exact path="/wertentwicklung" component={Wertentwicklung} />
          <Route
            path="/signin"
            render={() => this.redirectWhenAuthd(<SignIn />)}
          />
          <Route
            path="/signup"
            render={() => this.redirectWhenAuthd(<SignUp />)}
          />
          <Route path="/signout" render={() => this.redirectWhenUnAthd()} />
          <ProtectedRoute
            path="/dashboard"
            component={Dashboard}
            isAuthenticated={this.props.isAuthenticated}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(App);
