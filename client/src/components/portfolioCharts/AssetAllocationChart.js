import React, { Component } from "react";
import { connect } from "react-redux";

import DonutChart from "./charts/DonutChart";

class AssetAllocationChart extends Component {
  render() {
    if (this.props.assetAllocation === undefined) {
      return <div>Anlageaufteilung wird geladen...</div>;
    }
    return (
      <div>
        <DonutChart data={this.props.assetAllocation} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedPortfolioId: state.simulation_data.portfolios.selected.portfolioId,
  assetAllocation: state.simulation_data.portfolios.selected.metaData
    .assetAllocation
});

export default connect(mapStateToProps)(AssetAllocationChart);
