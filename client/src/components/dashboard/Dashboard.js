import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../store/actions/user";

import Portfolio from "./portfolio/Portfolio";

const header = {
  color: "white",
  fontWeight: "100",
  fontSize: "56px"
};

const panelStyle = {
  boxShadow: "5px 5px 20px rgba(0,0,0,0.25)",
  backgroundColor: "rgba(255, 255, 255, 0.15)",
  marginBottom: "20px",
  borderRadius: "4px",
  width: "100%"
};

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }
  
  render() {
    console.log(this.props);
    return (
      <div>
        <div style={header}>Asset Allocation</div>
        <Portfolio
          style={panelStyle}
          assetAllocation={this.props.assetAllocation}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  assetAllocation: state.user
});

export default connect(mapStateToProps, { fetchUser })(Dashboard);