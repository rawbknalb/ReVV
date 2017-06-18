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

import PortfolioSelectionButton from "./PortfolioSelectionButton";

import HoverPanel from "../HoverPanel";
class PortfolioSelection extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text
            style={{
              fontSize: 0.25,
              fontWeight: "bold",
              color: "darkgrey"
            }}
          >
            Geringeres Risiko
          </Text>
          <Text
            style={{
              fontSize: 0.25,
              fontWeight: "bold",
              color: "darkgrey"
            }}
          >
            Geringere Rendite
          </Text>
        </View>
        {this.props.portfolios
          .filter(portfolio => portfolio.id !== this.props.selectedPortfolio.id)
          .map((portfolio, index) => (
            <VrButton
              key={portfolio.name}
              onClick={() => this.props.selectPortfolio(portfolio)}
            >
              <PortfolioSelectionButton
                color="black"
                index={index}
                margin={0.05}
                portfolio={portfolio}
              />
            </VrButton>
          ))}
        <View>
          <Text
            style={{
              fontSize: 0.25,
              fontWeight: "bold",
              color: "darkgrey"
            }}
          >
            Höheres Risiko
          </Text>
          <Text
            style={{
              fontSize: 0.25,
              fontWeight: "bold",
              color: "darkgrey"
            }}
          >
            Höhere Rendite
          </Text>
        </View>
      </View>
    );
  }
}

export default PortfolioSelection;
