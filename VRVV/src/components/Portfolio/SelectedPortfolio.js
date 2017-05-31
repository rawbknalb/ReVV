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
                opacity: 0.5,
                borderRadius: 0.15,
                width: 3,
                height: 4
              }}
            />

            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                width: 3,
                height: 4
              }}
            >
              <Text
                style={{
                  fontSize: 0.35,
                  fontWeight: "200",
                  paddingLeft: 0.2,
                  paddingRight: 0.2,
                  textAlign: "center"
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
                ________________
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
              <Text
                style={{
                  fontSize: 0.3,
                  fontWeight: "200",
                  paddingLeft: 0.2,
                  paddingRight: 0.2,
                  textAlign: "center"
                }}
              >
                ____________
              </Text>
              <View
                style={{
                  flexDirection: "column",
                  margin: 0.1
                }}
              >
                <Text
                  style={{
                    fontSize: 0.3,
                    fontWeight: "200",
                    textAlign: "center",
                    textAlignVertical: "center",
                    margin: 0.2
                  }}
                >
                  Asset Allocation
                </Text>
                {this.renderAssetAllocation()}
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
