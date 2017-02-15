import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { validate } from "./Validation";
import { connect } from "react-redux";
import { signUpUser } from "../../../store/actions";

export const renderField = (
  { className, input, label, type, meta: { touched, error, warning } }
) => (
  <div className={(error ? "form-group has-error" : "form-group")}>
    <label className="col-sm-2 control-label">{label}</label>
    <div className="col-sm-10">
      <input className={className} {...input} placeholder={label} type={type} />
      {touched && (error && <span className="error">{error}</span>)}
    </div>
  </div>
);

class SignUp_Form extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signUpUser({ email, password });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="form-horizontal" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
