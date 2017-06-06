import React from "react";
import {
  asset,
  View,
  Text,
  Image,
  Plane,
  StyleSheet,
  CylindricalPanel,
  VrButton
} from "react-vr";

import HoverPanel from "../HoverPanel";

class SelectedPortfolio extends React.Component {
  /**
   * Renders the Text for each Asset Allocation, passed via props 
   * from parent. First formats the assetAllocation Object in to an
   * Array of it's keys. Then return for each element a new Object
   * inside the new Array with the formatted percentage amount
   */
  renderAssetAllocation() {
    const assetAllocation = Object.keys(
      this.props.selectedPortfolio.assetAllocation
    ).map(assetClass => {
      return {
        name: assetClass,
        percentage: Math.round(
          this.props.selectedPortfolio.assetAllocation[assetClass]
        )
      };
    });

    return assetAllocation.map(assetClass => (
      <Text key={assetClass.name} style={this.styles.assetAllocation}>
        {assetClass.name}: {assetClass.percentage} %
      </Text>
    ));
  }

  render() {
    return Object.keys(this.props.selectedPortfolio).length !== 0
      ? <HoverPanel
          portfolioId={this.props.selectedPortfolio.id}
          index={this.props.index}
        >
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
                borderRadius: 0.1,
                width: 6,
                height: 2
              }}
            />

            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                width: 6,
                height: 2
              }}
            >
              <Text
                style={{
                  fontSize: 0.5,
                  fontWeight: "200",
                  paddingLeft: 0.2,
                  paddingRight: 0.2,
                  textAlign: "center",
                  color: "tomato"
                }}
              >
                {this.props.selectedPortfolio.name}:
              </Text>

              <Text
                style={{
                  fontSize: 0.3,
                  fontWeight: "200",
                  paddingLeft: 0.2,
                  paddingRight: 0.2,
                  textAlign: "center"
                }}
              >
                {this.props.selectedPortfolio.title}
              </Text>

              <Plane dimWidth={4} dimHeight={0.03} />

              <View
                style={{
                  flexDirection: "column"
                }}
              >
              </View>
            </View>
          </View>
        </HoverPanel>
      : null;
  }

  styles = StyleSheet.create({
    assetAllocation: {
      fontSize: 0.2,
      fontWeight: "200"
      //margin: 0.05
    }
  });
}

export default SelectedPortfolio;
