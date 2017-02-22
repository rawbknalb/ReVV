import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { validate } from "./Validation";
import { connect } from "react-redux";
import { signUpUser } from "../../../store/actions/auth/";
import "../../../App.css";

export const renderField = (
  { className, input, label, type, meta: { touched, error, warning } }
) => (
  <div className="form-group">
    <label className="col-sm-1 control-label">{label}</label>
    <div className="col-sm-11">
      <input className={className} {...input} placeholder={label} type={type} />
      {touched && (error && <span className="error">{error}</span>)}
    </div>
  </div>
);

class SignUp_Form extends Component {
  handleFormSubmit(values) {
    // Call ActionCreator to sign up user
    this.props.signUpUser(values);
  }

  renderAlert = () => {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
      );
    }
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        className="form-horizontal"
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
      >
        <Field
          className="form-control"
          name="email"
          label="Email"
          component={renderField}
          type="email"
        />
        <Field
          className="form-control"
          name="password"
          label="Password"
          component={renderField}
          type="password"
        />
        <Field
          className="form-control"
          name="passwordConfirm"
          label="Confirm Password"
          component={renderField}
          type="password"
        />
        {this.renderAlert()}
        <button className="btn btn-primary" type="submit">Sign up</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

const SignUpForm = reduxForm({
  form: "signup",
  validate
})(SignUp_Form);

export default connect(mapStateToProps, { signUpUser })(SignUpForm);
