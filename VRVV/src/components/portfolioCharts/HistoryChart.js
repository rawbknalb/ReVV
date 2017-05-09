import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchHistoryData,
  setHistoryRange
} from "../../store/actions/simulation";

import { Grid, Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";

import LineChart from "./charts/LineChart";

const HistoryRangeButton = styled.span`
  /* Adapt the colors based on primary prop */
  background: rgba(0, 0, 0, 0);
  color: white;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0.25em 1em;
  margin: 1em;
  border-bottom: ${props => (props.active ? "2px solid #80e6fb" : "none")};
`;

const FinePrintDiv = styled.div`
  padding-top: 10px;
  font-size: 12px;
  line-height: 16px;
`;

const Div = styled.div`
  height: 100%;
  width: 100%;
`;

class HistoryChart extends Component {
  initialFetchHistory() {
    this.props.fetchHistoryData(
      this.props.computedPortfolioId,
      this.props.selectedPortfolioId,
      this.props.historyRange
    );
  }

  componentDidMount() {
    if (this.props.selectedPortfolioId !== null) {
      this.initialFetchHistory();
    }
  }

  shouldComponentUpdate(nextProps) {
    if (
      nextProps.historyData === [] ||
      nextProps.selectedPortfolioId !== this.props.selectedPortfolioId ||
      nextProps.historyRange !== this.props.historyRange
    ) {
      return false;
    }
    return true;
  }

  componentWillReceiveProps(nextProps) {
    const fetchHistory = () => {
      this.props.fetchHistoryData(
        nextProps.computedPortfolioId,
        nextProps.selectedPortfolioId,
        nextProps.historyRange
      );
    };

    const fetchHistoryDataAfterSelect = () => {
      if (this.props.selectedPortfolioId !== nextProps.selectedPortfolioId) {
        fetchHistory();
      }
    };

    const fetchHistoryDataAfterRangeChange = () => {
      if (this.props.historyRange !== nextProps.historyRange) {
        fetchHistory();
      }
    };

    fetchHistoryDataAfterSelect();
    fetchHistoryDataAfterRangeChange();
  }

  render() {
    if (this.props.historyData.length !== 0) {
      return (
        <Div>
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
            <Row>
              <Col xs={8} md={8} lg={8}>
                <FinePrintDiv>
                  Die frühere Wertentwicklung ist kein verlässlicher Indikator für die künftige Wertentwicklung.
                </FinePrintDiv>
                <FinePrintDiv>Weitere Informationen findest du hier</FinePrintDiv>
              </Col>
            </Row>
          </Grid>
        </Div>
      );
    } else {
      return <div style={{ height: "100%", width: "100%" }}>Historie wird geladen...</div>;
    }
  }
}

const mapStateToProps = state => ({
  historyData: state.simulation_data.history,
  historyRange: state.simulation_data.historyRange,
  selectedPortfolioId: state.simulation_data.portfolios.selected.portfolioId,
  computedPortfolioId: state.simulation_data.portfolios.computed.portfolioId
});

export default connect(mapStateToProps, { fetchHistoryData, setHistoryRange })(
  HistoryChart
);
