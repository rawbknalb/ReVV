import React from "react";
import {
  asset,
  View,
  Text,
  Image,
  StyleSheet,
  CylindricalPanel,
  VrButton
} from "react-vr";

import HoverPanel from "../HoverPanel";
class Portfolio extends React.Component {
  /**
   * Renders the Text for each Asset Allocation, passed via props 
   * from parent. First formats the assetAllocation Object in to an
   * Array of it's keys. Then return for each element a new Object
   * inside the new Array with the formatted percentage amount
   */

  render() {
    return (
      <HoverPanel portfolioId={this.props.portfolio.id} index={this.props.index}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: this.props.margin
          }}
        >
          <View
            style={{
              position: "absolute",
              backgroundColor: this.props.color,
              opacity: 0.8,
              borderRadius: 0.5,
              width: 1,
              height: 1
            }}
          />
          <Text
            style={{
              width: 1,
              fontSize: 0.2,
              fontWeight: "100",
              paddingLeft: 0.2,
              paddingRight: 0.2,
              color: "black",
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            {this.props.portfolio.name}
          </Text>
        </View>
      </HoverPanel>
    );
  }

  styles = StyleSheet.create({
    assetAllocation: {
      fontSize: 0.2,
      fontWeight: "200"
      //margin: 0.05
    }
  });
}

export default Portfolio;
