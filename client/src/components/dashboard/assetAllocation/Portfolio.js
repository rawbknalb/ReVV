import React from "react";
import styled from "styled-components";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

import Details from "./Details";
import AllocationChart from "../../charts/DonutPieChart";

const Panel = styled.section`
  margin-bottom: 1rem;
  /* box-shadow: 5px 5px 20px rgba(0,0,0,0.25);*/
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 0px;
  width: 100%;
  color: white;
`;

const PanelHeadline = styled.h5`
  color: ${props => props.primary ? '#80e6fb' : 'white'};
  text-align: center;  
  padding-top: 26px;
  padding-bottom: 26px
`;

const Portfolio = props => {
  const { assetAllocation } = props;
  return (
    <Grid fluid>
      <Row>
        <Col xs={12} md={12} lg={9}>
          <Panel>
            <PanelHeadline>Chart</PanelHeadline>
          </Panel>
        </Col>
        <Col xs={12} md={12} lg={3}>
          <Panel>
            <PanelHeadline>Anlageaufteilung</PanelHeadline>
            <AllocationChart data={assetAllocation} />
          </Panel>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={9}>
          Test
        </Col>
      </Row>
    </Grid>
  );
};

export default Portfolio;
