import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../store/actions/user";

import Portfolio from "./assetAllocation/Portfolio";

const header = {
  color: "white",
  fontWeight: "100",
  fontSize: "56px",
  padding: "20px",
  textAlign: "center"
};

const panelStyle = {
  boxShadow: "5px 5px 20px rgba(0,0,0,0.25)",
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  marginBottom: "20px",
  borderRadius: "15px",
  width: "100%"
};

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    if (this.props.assetAllocation) {
      console.log(this.props.assetAllocation)
      return (
        <div style={panelStyle}>
          <div style={header}>Asset Allocation</div>
          <Portfolio assetAllocation={this.props.assetAllocation} />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = state => ({ assetAllocation: state.user.assetAllocation });

export default connect(mapStateToProps, { fetchUser })(Dashboard);
