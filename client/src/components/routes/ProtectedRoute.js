import React from "react";
import { Route, Redirect } from "react-router";

const ProtectedRoute = (props) => (
  <Route
    path={props.path}
    render={props =>
      props.isAuthenticated ? props.component : <Redirect push to="/signin" />}
  />
);

export default ProtectedRoute;
