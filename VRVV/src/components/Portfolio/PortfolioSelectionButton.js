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
class PortfolioSelectionButton extends React.Component {

  render() {
    return (
      <HoverPanel
        portfolioId={this.props.portfolio.id}
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
              color: "white",
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
}

export default PortfolioSelectionButton;
