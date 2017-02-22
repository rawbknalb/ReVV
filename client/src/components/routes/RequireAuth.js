import React, { Component } from "react";
import { Redirect } from "react-router";

export default function(component) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        <Redirect push to="/signin" />;
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        <Redirect push to="/signin" />;
      }
    }

    render() {
      return <component />;
    }
  }

  return Authentication;
}
