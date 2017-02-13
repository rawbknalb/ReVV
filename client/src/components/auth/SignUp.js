import React from "react";
import { Link } from "react-router-dom";

import SignUpForm from "./forms/SignUpForm";

const SignUp = () => (
  <div>
    <h1>Create your personal account</h1>
    <div className="panel panel-default">
      <div className="panel-body">
        <SignUpForm />      
      </div>
    </div>
    New to *Name*? <Link to="/signup">Create an account.</Link>
  </div>
);

export default SignUp;
