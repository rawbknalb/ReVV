import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAssetAllocation } from "../../store/actions/assetAllocation";

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
  componentDidMount() {
    console.log(localStorage.getItem("token"));

    this.props.fetchAssetAllocation();
  }

  render() {
    return (
      <div>
        <div style={header}>Asset Allocation</div>
        <Portfolio style={panelStyle} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    etf_data: state.etf_data
  };
};

const mapDispatchToProps = dispatch => {
  return;
};

export default connect(mapStateToProps, { fetchAssetAllocation })(Dashboard);
