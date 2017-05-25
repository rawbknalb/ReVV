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
import CurvedRow from "./CurvedRow";

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
      <HoverPanel
        portfolioId={this.props.portfolioId}
        index={this.props.index}
        //count={this.props.portfolios.length}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: this.props.color,
            margin: this.props.margin,
            borderRadius: this.props.portfolioId === this.props.selectedPortfolio.id
              ? 0.2
              : 1,
            width: this.props.portfolioId === this.props.selectedPortfolio.id
              ? 3
              : 1,
            height: this.props.portfolioId === this.props.selectedPortfolio.id
              ? 4
              : 1
          }}
        >
          {this.props.portfolioId === this.props.selectedPortfolio.id
            ? <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: 3,
                  height: 4
                  // width: 250,
                  // height: 512
                }}
              >
                <Text
                  style={{
                    fontSize: 0.5,
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
                    margin: 0.5
                  }}
                >
                  <Text
                    style={{
                      fontSize: 0.5,
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
            : <Text
                style={{
                  fontSize: 0.2,
                  fontWeight: "400",
                  paddingLeft: 0.2,
                  paddingRight: 0.2,
                  textAlign: "center"
                }}
              >
                {this.props.name}
              </Text>}
        </View>
      </HoverPanel>
    );
  }

  styles = StyleSheet.create({
    assetAllocation: {
      fontSize: 0.2,
      fontWeight: "400"
    }
  });
}

export default Portfolio;
