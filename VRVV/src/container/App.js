import React from "react";
import { asset, Pano, Text, View, Image, CylindricalPanel } from "react-vr";
import { connect } from "react-redux";

import PerformanceView from "./PerformanceView";
import PortfolioOverView from "./PortfolioOverView";

import NavigationMenu from "./NavigationMenu";
import Router from "./Router";

class App extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("Lady_Elliot_Island_SVII_small.jpg")} />
        <View
          style={{
            transform: [{ translate: [0, 2.5, -5] }],
            layoutOrigin: [0.5, 0.5],
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <NavigationMenu />
          <View style={{ flexDirection: "row" }}>
            <Image
              source={asset("vr_head_green.png")}
              style={{ width: 1, height: 1 }}
            />
            <Image
              source={asset("visualvest-logo-transparent.png")}
              style={{ width: 2.2, height: 1 }}
            />
          </View>
        </View>
        <Router />
      </View>
    );
  }
}

export default connect(null)(App);
