import React from "react";
import { connect } from "react-redux";

import Portfolio from "./portfolio/Portfolio";

const header = {
  color: 'white',
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

const Dashboard = props => (
  <div>
    <div style={header}>Asset Allocation</div>
    <Portfolio style={panelStyle}/>
  </div>
);

const mapStateToProps = state => {
  return {
    etf_data: state.etf_data
  };
};

export default connect(mapStateToProps)(Dashboard);
