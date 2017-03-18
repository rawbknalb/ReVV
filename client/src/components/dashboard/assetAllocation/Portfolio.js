import React from "react";
import styled from "styled-components";
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

import Slider from "./Slider";
import PortfolioChart from "../../charts/DonutPieChart";

const Panel = styled.section`
    background: papayawhip;
    margin-bottom: 1rem;
`;

const Portfolio = props => {
  return (
  <Grid fluid>
    <Row>
      <Col xs={12} md={12} lg={6}>
        <Panel>
          <PortfolioChart data={props.assetAllocation} />
          <Slider />
        </Panel>
      </Col>
      <Col xs={12} md={12} lg={6}>
        <Panel>
          welgknlwenglwe
          wg <br/>
          wg <br/>          wg <br/>          wg <br/>          wg <br/>          wg <br/>          wg <br/>
        </Panel>
      </Col>
    </Row>
  </Grid>
  );
};

export default Portfolio;
