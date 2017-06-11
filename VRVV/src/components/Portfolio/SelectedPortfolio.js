import React from "react";
import {
  asset,
  View,
  Text,
  Image,
  Plane,
  StyleSheet,
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
              position: "absolute",
              backgroundColor: this.props.color,
              opacity: 0.8,
              borderRadius: 0.1,
              width: 6,
              height: 1.02
            }}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: 6,
              margin: this.props.margin,
              borderColor: "tomato",
              borderRadius: 0.1,
              borderWidth: 0.02
            }}
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
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: 4,
                  height: 1
                }}
              >
                <Text
                  style={{
                    fontSize: 0.4,
                    fontWeight: "bold",
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
                    fontSize: 0.2,
                    fontWeight: "400",
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    textAlign: "center"
                  }}
                >
                  {this.props.selectedPortfolio.title}
                </Text>
              </View>
            </View>

            <VrButton
              onClick={() =>
                this.props.handleSelectedPortfolioClick(
                  this.props.selectedPortfolio.history,
                  this.props.selectedPortfolio.assetAllocation
                )}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 0.8,
                  height: 0.8
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    backgroundColor: "tomato",
                    opacity: 1,
                    borderRadius: 0.1,
                    width: 0.8,
                    height: 0.8
                  }}
                />
                <Text
                  style={{
                    fontSize: 0.2,
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  Details
                </Text>
              </View>
            </VrButton>

          </View>

        </HoverPanel>
      : null;
  }

  styles = StyleSheet.create({
    assetAllocation: {
      fontSize: 0.2,
      fontWeight: "200"
    }
  });
}

export default SelectedPortfolio;
