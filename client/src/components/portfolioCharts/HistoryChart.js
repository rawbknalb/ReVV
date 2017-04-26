import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHistoryData } from "../../store/actions/simulation";

import LineChart from "./charts/LineChart";

class HistoryChart extends Component {
  componentDidMount() {
    if (this.props.portfolioId != null) {
      this.props.fetchHistoryData(this.props.portfolioId, undefined);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.portfolioId !== nextProps.portfolioId) {
      this.props.fetchHistoryData(nextProps.portfolioId, undefined);
    }
  }

  render() {
    if (this.props.historyData.length != 0) {
      return (
        <div>
          {() => this.props.fetchHistoryData(this.props.portfolioId, undefined)}
          <LineChart data={this.props.historyData} />{this.props.portfolioId}
        </div>
      );
    } else {
      return <div>{this.props.portfolioId}Loading...</div>;
    }
  }
}

const mapStateToProps = state => ({
  historyData: state.simulation_data.history,
  portfolioId: state.simulation_data.portfolio.selected.portfolioId
});

export default connect(mapStateToProps, { fetchHistoryData })(HistoryChart);
