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
        <Pano source={asset("tasmania.jpg")} />
        <View
          style={{
            transform: [{ translate: [0, 2.5, -5] }],
            layoutOrigin: [0.5, 0.5],
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <NavigationMenu />
          <Image
            source={asset("visualvest-logo-transparent.png")}
            style={{ width: 2.2, height: 1 }}
          />
        </View>
        <Router />
      </View>
    );
  }
}

export default connect(null)(App);
