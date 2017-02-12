import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class Signin_Form extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="form-group">
          <label>Email:</label>
          <Field
            className="form-control"
            name="email"
            component="input"
            type="email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <Field
            className="form-control"
            name="password"
            component="input"
            type="password"
          />
        </div>
        <button className="btn btn-primary" type="submit">Sign in</button>
      </form>
    );
  }
}

const SigninForm = reduxForm({
  form: "signin"
})(Signin_Form);

export default SigninForm;
