import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../store/actions/user";

// Import Style
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import { Panel, PanelHeadline } from "../style/Panel";
import { PortfolioHeadlineInfo } from "../style/PortfolioHeadline";

import Tabs, { TabPane } from "rc-tabs";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import SwipeableInkTabBar from "rc-tabs/lib/SwipeableInkTabBar";
import "rc-tabs/assets/index.css";

import MotionMenu from "./MotionMenu";

// Import Portfolio Charts
import PortfolioHistoryChart from "../charts/LineChart";
import AllocationDonutPieChart from "../charts/DonutPieChart";

import RiskSlider from "./RiskSlider";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  callback() {}

  render() {
    if (this.props.assetAllocation) {
      console.log(this.props.assetAllocation);
      return (
        <div>
          {/* ToDo: Wrap in Header Component */}
          <PortfolioHeadlineInfo>
            Unser vorläufiges Angebot: {this.props.assetAllocation.name}
          </PortfolioHeadlineInfo>
          <PortfolioHeadlineInfo>
            Das dynamische ETF-VestFolio mit Chancen in Aktien-
            und Rohstoffmärkten zu erhöhtem Risiko
          </PortfolioHeadlineInfo>
          <br />
          {/* Wrap in Charts Component ????? */}
          <Grid>
            <Row>
              <Col xs>
                <Row center="xs">
                  <MotionMenu />
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} lg={8}>
                <Panel>
                  <Tabs
                    defaultActiveKey="1"
                    onChange={this.callback}
                    renderTabBar={() => (
                      <SwipeableInkTabBar pageSize={5} speed={10} />
                    )}
                    renderTabContent={() => <TabContent />}
                  >
                    <TabPane tab="Historie" key="1">
                      {" "}<PortfolioHistoryChart />
                    </TabPane>
                    <TabPane tab="Anlageaufteilung" key="2">
                      {" "}
                      <AllocationDonutPieChart
                        data={this.props.assetAllocation}
                      />
                    </TabPane>
                    <TabPane tab="Prognose" key="3">third</TabPane>
                    <TabPane tab="Testo" key="4">third</TabPane>
                    <TabPane tab="Testu" key="5">third</TabPane>
                  </Tabs>
                </Panel>
              </Col>
              <Col xs={false} md={12} lg={4}>
                <Panel>
                  <PanelHeadline>Anlageaufteilung</PanelHeadline>
                  <AllocationDonutPieChart data={this.props.assetAllocation} />
                </Panel>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} lg={7}> <RiskSlider /> </Col>
            </Row>
          </Grid>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = state => ({
  assetAllocation: state.user.assetAllocation
});

export default connect(mapStateToProps, { fetchUser })(Dashboard);
