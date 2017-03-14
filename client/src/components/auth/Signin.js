import React from "react";
import { Link } from "react-router-dom";

import SignInForm from "./forms/SignInForm";

const panelStyle = {
  boxShadow: "5px 5px 20px rgba(0,0,0,0.25)",
  backgroundColor: "rgba(0, 0, 0, 0)",
  marginBottom: "20px",
  borderRadius: "4px",
  width: "100%"
};

const SignIn = () => (
  <div>
    <h1>Sign in to *Name*</h1>
    <div style={panelStyle}>
      <div className="panel-body">
        <SignInForm />      
      </div>
    </div>
    New to *Name*? <Link to="/signup">Create an account.</Link>
  </div>
);

export default SignIn;
