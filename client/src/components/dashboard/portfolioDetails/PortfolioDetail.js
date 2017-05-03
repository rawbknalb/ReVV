import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPortfolioMetadata } from "../../../store/actions/simulation";

import AssetClassContainer from "./AssetClassContainer";

import styled from "styled-components";
import { Panel } from "../../style/Panel";

const Div = styled.div`
  padding-top: 45px;
  padding-bottom: 60px;
`;

class PortfolioDetail extends Component {
  componentDidMount() {
    this.props.fetchPortfolioMetadata();
  }

  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.selectedPortfolio !== this.props.selectedPortfolio) {
  //     return true;
  //   }
  //   return false;
  // }

  componentWillReceiveProps() {
    return;
  }

  renderAssetClasses = () => {
    const { assetAllocation } = this.props.selectedPortfolio;
    const { funds } = this.props.selectedPortfolio;
    return Object.keys(assetAllocation).map((assetClass, index) => (
      <AssetClassContainer key={index} assetClass={assetClass} funds={funds} />
    ));
  };

  render() {
    return this.props.selectedPortfolio.constructor === Object &&
      Object.keys(this.props.selectedPortfolio).length === 0
      ? <Div><Panel>Loading...</Panel></Div>
      : <Div>
          <Panel>
          {console.log(this.props.selectedPortfolio.funds)}
            {this.renderAssetClasses()}
          </Panel>
        </Div>;
  }
}

const mapStateToProps = state => ({
  //allPortfolios: state.simulation_data.portfolios.metaData,
  selectedPortfolio: state.simulation_data.portfolios.selected.metaData
});

export default connect(mapStateToProps, { fetchPortfolioMetadata })(
  PortfolioDetail
);
