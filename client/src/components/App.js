import React, { Component } from "react";
import "../App.css";

// React Router
import { Route } from "react-router";

// Components
import Header from "./layout/Header";
import Signin from "./auth/Signin";
import Home from "./Home";

class App extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="App">
        <Header />
        <Route exact path={match.url} component={Home} />
        <Route path="/signin" component={Signin} />
      </div>
    );
  }
}

export default App;
