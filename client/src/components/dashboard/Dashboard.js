import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchUser } from "../../store/actions/user";

import logo from "../../logo.svg";

import PortfolioCharts from "./assetAllocation/Portfolio";

const PortfolioInfo = styled.h5`
  color: ${props => props.primary ? '#80e6fb' : 'white'};
  font-weight: 300;
  text-align: ${props => props.left ? 'left' : 'center'};
`;

const Logo = styled.img`
  margin: auto;
  display: block;
  width: 155px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    if (this.props.assetAllocation) {
      console.log(this.props.assetAllocation)
      return (
        <div>
          <Logo src={logo} alt="VisualVest" />
          <PortfolioInfo>Unser vorläufiges Angebot: placeholder</PortfolioInfo>
          <PortfolioInfo>
            Das dynamische ETF-VestFolio mit Chancen in Aktien- 
            und Rohstoffmärkten zu erhöhtem Risiko
          </PortfolioInfo>
          <br/>
          <PortfolioCharts assetAllocation={this.props.assetAllocation} />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = state => ({ assetAllocation: state.user.assetAllocation });

export default connect(mapStateToProps, { fetchUser })(Dashboard);
