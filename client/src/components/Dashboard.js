import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
//import { validate } from "./Validation";
import { connect } from "react-redux";
import { fetchPrice } from "../store/actions/stoxx/";
import "../App.css";

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

class Dashboard extends Component {
  handleFormSubmit(values) {
    console.log(values);
    this.props.fetchPrice(values);
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
          name="isin"
          label="ISIN"
          component={renderField}
        />
        {this.renderAlert()}
        <button className="btn btn-primary" type="submit">Get Price</button>
      </form>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     errorMessage: state.auth.errorMessage
//   };
// };

const Dash = reduxForm({
  form: "stoxx",
})(Dashboard);

export default connect(null, { fetchPrice })(Dash);
