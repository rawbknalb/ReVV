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

import ChartPanel from "../components/ChartPanel";

class PerformancePanels extends React.Component {

  renderPanels() {
    const images = [
      { uri: "../static_assets/1yr.jpg", header: "Wertentwicklung 1 Jahr" },
      {
        uri: `data:image/png;charset=utf-8;base64,${this.props.historyImages["36"].img}`,
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
            //flex: 1,
            //flexDirection: "row",
            //transform: [{ rotate: "0deg" }]
          }}
        >
          {this.renderPanels()}
        </View>
      : <View><Text>Test</Text></View>;
  }
}


export default PerformancePanels;
