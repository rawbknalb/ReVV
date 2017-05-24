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

import FlatPanel from "./FlatPanel";
import HoverPanel from "./HoverPanel";
import CurvedPanel from "./CurvedPanel";

class Portfolio extends React.Component {
  state = { hover: false };

  onHover() {
    this.setState({ hover: !this.state.hover });
  }

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
    return (
      <HoverPanel portfolioId={this.props.portfolioId}>
        <CurvedPanel index={this.props.index}>
          <FlatPanel color={this.props.color} margin={1}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                width: 250,
                height: 512
              }}
            >
              <Text
                style={{
                  fontSize: 50,
                  fontWeight: "400",
                  paddingLeft: 0.2,
                  paddingRight: 0.2,
                  textAlign: "center"
                }}
              >
                {this.props.name}
              </Text>
              <View
                style={{
                  flexDirection: "column",
                  //justifyContent: "flex-end",
                  margin: 2
                }}
              >
                <Text
                  style={{
                    fontSize: 40,
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
        </CurvedPanel>
      </HoverPanel>
    );
  }

  styles = StyleSheet.create({
    assetAllocation: {
      fontSize: 30,
      fontWeight: "400"
    }
  });
}

export default Portfolio;
