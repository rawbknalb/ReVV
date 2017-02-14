import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signInUser } from "../../../store/actions";

class SignIn_Form extends Component {
  handleFormSubmit({ email, password }) {
    console.log({ email, password })
    this.props.signInUser({ email, password });
  }

  renderAlert = () => {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
      );
    }
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
        {this.renderAlert()}
        <button className="btn btn-primary" type="submit">Sign in</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage
  }
}

const SignInForm = reduxForm({
  form: "signin"
})(SignIn_Form);

export default connect(mapStateToProps, {signInUser})(SignInForm)