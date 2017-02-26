import React from "react";
import { Route, Redirect } from "react-router";

const ProtectedRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      props.isAuthenticated
        ? React.createElement(component, props)
        : <Redirect push to="/signin" />}
  />
);

export default ProtectedRoute;
