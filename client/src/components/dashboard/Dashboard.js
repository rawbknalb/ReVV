import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../store/actions/user";

// Import Style
import { ThemeProvider } from "styled-components";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import { Panel, PanelHeadline } from "../style/Panel";
import { PortfolioHeadlineInfo } from "../style/PortfolioHeadline";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import SwipeableInkTabBar from "rc-tabs/lib/SwipeableInkTabBar";
import "../../style/tabs.css";

import MotionMenu from "./MotionMenu";

// Import Portfolio Charts
//import PortfolioHistoryChart from "../portfolioCharts/charts/LineChart";
import HistoryChart from "../portfolioCharts/HistoryChart";
import AssetAllocationChart from "../portfolioCharts/AssetAllocationChart";
import ForeCastChart from "../portfolioCharts/charts/ForeCastChart";

import RiskSlider from "./RiskSlider";
import PortfolioDetail from "./PortfolioDetail";

const gridTheme = {
  flexboxgrid: {
    // Defaults
    gridSite: 12,
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    container: {
      sm: 61, // rem
      md: 61, // rem
      lg: 76 // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 991, // em
      md: 1024, // em
      lg: 1200 // em
    }
  }
};

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    if (!this.props.assetAllocation) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {/* ToDo: Wrap in Header Component */}

        <PortfolioHeadlineInfo>
          {this.props.selectedPortfolioId !== this.props.computedPortfolioId
            ? "Deine Wahl: "
            : "Unser vorläufiges Angebot: "}
          {this.props.assetAllocation.name}
        </PortfolioHeadlineInfo>
        <PortfolioHeadlineInfo>
          Das dynamische ETF-VestFolio mit Chancen in Aktien-
          und Rohstoffmärkten zu erhöhtem Risiko
        </PortfolioHeadlineInfo>
        <br />
        {/* Wrap in Charts Component ????? */}
        <ThemeProvider theme={gridTheme}>
          <Grid>
            <Row>
              <Col xs>
                <Row center="xs">
                  <MotionMenu />
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={8} md={8} lg={8}>
                <Panel>
                  <Tabs
                    defaultActiveKey="1"
                    onChange={this.callback}
                    renderTabBar={() => (
                      <SwipeableInkTabBar pageSize={4} speed={10} />
                    )}
                    renderTabContent={() => <TabContent />}
                  >
                    <TabPane tab="Historie" key="1">
                      <HistoryChart />
                    </TabPane>
                    <TabPane tab="Anlageaufteilung" key="2">
                      {/*<AllocationDonutPieChart
                        data={this.props.assetAllocation}
                      />*/}
                      <AssetAllocationChart />
                    </TabPane>
                    <TabPane tab="Prognose" key="3">
                      <ForeCastChart />
                    </TabPane>
                    <TabPane tab="Länder" key="4">third</TabPane>
                  </Tabs>
                </Panel>
              </Col>
              <Col xs={false} sm={4} md={4} lg={4}>
                <Panel>
                  {/* Include PanelHeadline in Panel as prop? */}
                  <PanelHeadline>Anlageaufteilung</PanelHeadline>
                  {/* <AllocationDonutPieChart data={this.props.assetAllocation} />*/}
                  <AssetAllocationChart />
                </Panel>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} lg={7}>
                <RiskSlider />
              </Col>
            </Row>
            <Row>
              <Col xs>
                <Row center="xs">
                  <PortfolioDetail />
                </Row>
              </Col>
            </Row>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  assetAllocation: state.user.assetAllocation
});

export default connect(mapStateToProps, { fetchUser })(Dashboard);
