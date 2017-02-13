import React, { Component } from "react";
import "../App.css";

// React Router
import { Route } from "react-router";

// Components
import Header from "./layout/Header";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Home from "./Home";

class App extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="App">
        <Header />
        <Route exact path={match.url} component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />        
      </div>
    );
  }
}

export default App;
