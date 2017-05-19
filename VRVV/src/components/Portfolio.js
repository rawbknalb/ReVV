import React from "react";
import {
  asset,
  View,
  Text,
  Image,
  StyleSheet,
  CylindricalPanel
} from "react-vr";

import FlatPanel from "./FlatPanel";
import CurvedPanel from "./CurvedPanel";

class Portfolio extends React.Component {
  renderAssetAllocation() {
    const assetAllocation = Object.keys(
      this.props.assetAllocation
    ).map(assetClass => {
      return {
        name: assetClass,
        percentage: Math.round(this.props.assetAllocation[assetClass] * 100) /
          100
      };
    });

    return assetAllocation.map(assetClass => (
      <Text key={assetClass.name} style={this.styles.assetAllocation}>
        {assetClass.name}: {assetClass.percentage}%
      </Text>
    ));
  }

  render() {
    const styles = {
      viewStyle: {
        flexDirection: "column",
        alignItems: "center",
        width: 1400,
        height: 1000
      }
    };

    return (
      <FlatPanel color={this.props.color}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: 15
          }}
        >
          <Text
            style={{
              fontSize: 1,
              fontWeight: "400",
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            {this.props.name}
          </Text>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-end",
              margin: 1
            }}
          >
            <Text
              style={{
                fontSize: 0.9,
                fontWeight: "400",
                textAlign: "center",
                textAlignVertical: "center"
              }}
            >
              Asset Allocation
            </Text>
            {this.renderAssetAllocation()}
          </View>
        </View>
      </FlatPanel>
    );
  }

  styles = StyleSheet.create({
    assetAllocation: {
      fontSize: 0.6,
      fontWeight: "400"
    }
  });
}

export default Portfolio;
