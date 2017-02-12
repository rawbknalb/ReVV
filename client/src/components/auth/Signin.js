import React from "react";
import { Link } from "react-router-dom";

import SigninForm from "./forms/SigninForm";

const Signin = () => (
  <div>
    <h1>Sign in to *Name*</h1>
    <div className="panel panel-default">
      <div className="panel-body">
        <SigninForm />      
      </div>
    </div>
    New to *Name*? <Link to="/signup">Create an account.</Link>
  </div>
);

export default Signin;
