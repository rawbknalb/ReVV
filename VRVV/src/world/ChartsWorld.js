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
  // componentDidMount() {
  //   this.props.historyData.length !== 0 &&
  //     this.props.getHistoryImages(this.props.historyData);
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.historyData.length !== 0) {
      this.props.getHistoryImages(nextProps.historyData);
    }
  }

  renderPanels() {
    const images = [
      { uri: "../static_assets/1yr.jpg", header: "Wertentwicklung 1 Jahr" },
      { uri: "../static_assets/3yrs.jpg", header: "Wertentwicklung 3 Jahre" },
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

//onst mapStateToProps = (state) => ({images})

export default connect(null, { getHistoryImages })(ChartsWorld);
