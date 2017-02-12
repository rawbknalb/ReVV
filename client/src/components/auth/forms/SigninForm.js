import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signInUser } from "../../../store/actions";

class Signin_Form extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signInUser({ email, password });
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

const SignInForm = reduxForm({
  form: "signin"
})(Signin_Form);

export default connect(null, {signInUser})(SignInForm)