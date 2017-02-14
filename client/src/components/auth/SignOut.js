import React, { Component } from "react";
import { connect } from "react-redux";
import { signOutUser } from "../../store/actions";

class SignOut extends Component {
  componentDidMount() {
    this.props.signOutUser();
  }

  render() {
    return <h1>Sorry to see you go...</h1>
  }
}

export default connect(null, {signOutUser})(SignOut);
