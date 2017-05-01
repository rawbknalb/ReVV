import React, { Component } from "react";
import { connect } from "react-redux";

// import { Grid, Col, Row } from "react-styled-flexboxgrid";
// import styled from "styled-components";

import DonutChart from "./charts/DonutChart";

class AssetAllocationChart extends Component {

  // shouldComponentUpdate(nextprops) {
  //   if (nextprops.selectedPortfolioId !== this.props.selectedPortfolioId) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    if (this.props.assetAllocation !== undefined) {
      return (
        <div>
          <DonutChart data={this.props.assetAllocation} />
        </div>
      );
    } else {
      return <div>Historie wird geladen...</div>;
    }
  }
}

const mapStateToProps = state => ({
  selectedPortfolioId: state.simulation_data.portfolios.selected.portfolioId,
  assetAllocation: state.simulation_data.portfolios.selected.metaData
    .assetAllocation
});

export default connect(mapStateToProps)(AssetAllocationChart);
