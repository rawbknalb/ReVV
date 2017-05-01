import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPortfolioMetadata } from "../../store/actions/simulation";

import styled from "styled-components";

const Div = styled.div`
  padding-top: 60px;
`;

class PortfolioDetail extends Component {
  componentDidMount() {
    this.props.fetchPortfolioMetadata();
  }

  renderList() {
    return (
      <ul>
        {this.props.selectedPortfolioMeta.funds.map(fund => (
          <li key={fund.fundIsin}>{fund.fundIsin}</li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.allPortfolios.length === 0) {
      return <Div>Loading Data....</Div>;
    }
    return (
      <Div>
        Details Accortdion
        {this.renderList()}
      </Div>
    );
  }
}

const mapStateToProps = state => ({
  allPortfolios: state.simulation_data.portfolios.metaData,
  selectedPortfolioMeta: state.simulation_data.portfolios.selected.metaData
});

export default connect(mapStateToProps, { fetchPortfolioMetadata })(
  PortfolioDetail
);
