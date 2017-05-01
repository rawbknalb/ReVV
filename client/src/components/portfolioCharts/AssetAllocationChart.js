import React, { Component } from "react";
import { connect } from "react-redux";

import { Grid, Col, Row } from "react-styled-flexboxgrid";
// import styled from "styled-components";

import LineChart from "./charts/LineChart";

class AssetAllocationChart extends Component {
  componentDidMount() {
    return;
  }

  shouldComponentUpdate(nextprops) {
    if (
      nextprops.historyData === [] ||
      nextprops.selectedPortfolioId !== this.props.selectedPortfolioId
    ) {
      return false;
    }
    return true;
  }

  componentWillReceiveProps(nextProps) {
    return;
  }

  render() {
    if (this.props.historyData.length !== 0) {
      return (
        <div>
          <Grid fluid>
            <Row center="xs">
              <HistoryRangeButton
                active={this.props.historyRange === 12}
                onClick={() => this.props.setHistoryRange(12)}
              >
                1 Jahr
              </HistoryRangeButton>
              <HistoryRangeButton
                active={this.props.historyRange === 36}
                onClick={() => this.props.setHistoryRange(36)}
              >
                3 Jahre
              </HistoryRangeButton>
              <HistoryRangeButton
                active={this.props.historyRange === 0}
                onClick={() => this.props.setHistoryRange(0)}
              >
                Maximal
              </HistoryRangeButton>
            </Row>
            <Row>
              <Col xs>
                <LineChart data={this.props.historyData} />
              </Col>
            </Row>
          </Grid>
        </div>
      );
    } else {
      return <div>Historie wird geladen...</div>;
    }
  }
}

const mapStateToProps = state => ({
  selectedPortfolioId: state.simulation_data.portfolios.selected.portfolioId,
  funds: state.simulation_data.portfolios.selected.metaData.funds
});

export default connect(mapStateToProps, { fetchHistoryData, setHistoryRange })(
  AssetAllocationChart
);
