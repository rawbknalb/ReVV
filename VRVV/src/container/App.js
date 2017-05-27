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
        <Pano source={asset("sandnes_flakstadoya_lofoten_panorama_medium_res.jpg")} />
        <View
          style={{
            transform: [{ translate: [0, 10.5, -20] }],
            layoutOrigin: [0.5, 0.5],
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute"
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
            <Image
              source={asset("vr_head_green.png")}
              style={{  width: 2.5, height: 2.5 }}
            />
            <Image
              source={asset("visualvest-logo-transparent.png")}
              style={{ width: 4.4, height: 2 }}
            />
          </View>
        </View>
        <View style={{ transform: [{ translate: [0, -2.5, -6] }] }}>
          <NavigationMenu />
        </View>
        <Router />
      </View>
    );
  }
}

export default connect(null)(App);
