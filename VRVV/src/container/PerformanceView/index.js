import React from "react";
import { asset, Pano, Text, View } from "react-vr";
import { connect } from "react-redux";
import {
  fetchHistoryData,
  setHistoryRange,
  getHistoryImages
} from "../../store/actions/simulation";

import PerformancePanels from "../../world/PerformancePanels";

class PerformanceView extends React.Component {
  // Only fetch HistoryData in case Portfolio is selected
  // initialy the selected Portfolio is the computed one
  componentDidMount() {
    if (this.props.selectedPortfolioId !== null) {
      this.props.fetchHistoryData(
        this.props.selectedPortfolioId,
        this.props.historyRange
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    // check if historyData arrives and that the next receiving
    // history data is not identical to exisiting history data
    if (
      nextProps.historyData.length !== 0 &&
      this.props.historyData !== nextProps.historyData
    ) {
      // fetches base64 image from highcharts server via this action
      // passes the pre-fetched history data from parent
      this.props.getHistoryImages(nextProps.historyData);
    }
  }

  render() {
    return (
      <View>
        <Pano source={asset("tasmania.jpg")} />
        <Text
          style={{
            fontSize: 0.8,
            fontWeight: "400",
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translate: [0, 9, -10] }]
          }}
        >
          Performance
          {/*<ViewTitle title=""/>*/}
        </Text>
        <PerformancePanels
          historyData={this.props.historyData}
          historyImages={this.props.historyImages}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  historyData: state.simulation_data.history,
  historyRange: state.simulation_data.historyRange,
  historyImages: state.simulation_data.historyImages,
  selectedPortfolioId: state.simulation_data.portfolios.selected.portfolioId
});

export default connect(mapStateToProps, {
  fetchHistoryData,
  setHistoryRange,
  getHistoryImages
})(PerformanceView);
