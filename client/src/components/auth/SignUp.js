import React from "react";
import { Link } from "react-router-dom";

import SignUpForm from "./forms/SignUpForm";

const panelStyle = {
  boxShadow: "5px 5px 20px rgba(0,0,0,0.25)",
  backgroundColor: "rgba(255, 255, 255, 0.15)",
  marginBottom: "20px",
  borderRadius: "4px",
  width: "100%"
};

const SignUp = () => (
  <div>
    <h1>Create your personal account</h1>
    <div style={panelStyle}>
      <div className="panel-body">
        <SignUpForm />      
      </div>
    </div>
    New to *Name*? <Link to="/signup">Create an account.</Link>
  </div>
);

export default SignUp;
