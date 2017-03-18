import React from "react";
import styled from "styled-components";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

import Details from "./Details";
import PortfolioChart from "../../charts/DonutPieChart";

const Panel = styled.section`
    margin-bottom: 1rem;
`;

const Portfolio = props => {
  const { assetAllocation } = props;
  return (
    <Grid fluid>
      <Row>
        <Col xs={12} md={12} lg={6}>
          <Panel>
            <PortfolioChart data={assetAllocation} />
          </Panel>
        </Col>
        <Col xs={12} md={12} lg={6}>
          <Panel>
            <Details data={assetAllocation} />
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
};

export default Portfolio;
