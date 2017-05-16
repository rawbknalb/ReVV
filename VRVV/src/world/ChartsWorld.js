import React from "react";
import {
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Image,
  Plane,
  Box,
  CylindricalPanel
} from "react-vr";
import { connect } from "react-redux";
import { getHistoryImages } from "../store/actions/simulation";

import ChartPanel from "../components/ChartPanel";

class ChartsWorld extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.historyData.length !== 0 &&
      this.props.historyData !== nextProps.historyData
    ) {
      // fetches base64 image from highcharts server via this action
      // passes the pre-fetched history data from parent
      this.props.getHistoryImages(nextProps.historyData);
    }
  }

  renderPanels() {
    const images = [
      { uri: "../static_assets/1yr.jpg", header: "Wertentwicklung 1 Jahr" },
      {
        uri: `data:image/png;base64,${this.props.historyImages["36"].img}`,
        header: `Wertentwicklung 3 Jahre`
      },
      { uri: "../static_assets/maxyrs.jpg", header: "Wertentwicklung Maximal" }
    ];

    return images.map((image, index) => (
      <ChartPanel
        rotate="y"
        header={image.header}
        uri={image.uri}
        index={index}
      />
    ));
  }

  render() {
    return this.props.historyData.length !== 0
      ? <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            transform: [{ rotate: "0deg" }]
          }}
        >
          {this.renderPanels()}
        </View>
      : <View><Text>Test</Text></View>;
  }
}

const mapStateToProps = state => ({
  historyImages: state.simulation_data.historyImages
});

export default connect(mapStateToProps, { getHistoryImages })(ChartsWorld);
