import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signUpUser } from "../../../store/actions";

class SignUp_Form extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signUpUser({ email, password });
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

const SignUpForm = reduxForm({
  form: "signup"
})(SignUp_Form);

export default connect(null, {signUpUser})(SignUpForm)