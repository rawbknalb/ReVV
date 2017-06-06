import React from "react";
import { asset, Pano, Text, View, Image, CylindricalPanel } from "react-vr";
import { connect } from "react-redux";

import PerformanceView from "./PerformanceView";
import PortfolioOverView from "./PortfolioOverView";
import Logo from "../components/Logo";

import NavigationMenu from "./NavigationMenu";
import Router from "./Router";

class App extends React.Component {
  render() {
    return (
      <View>
        <Pano
          style={{ transform: [{ rotateY: 180 }] }}
          source={asset("render_3.jpg")}
        />
        <View
          style={{
            transform: [{ translate: [0, 7, -20] }],
            layoutOrigin: [0.5, 0.5],
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute"
          }}
        >
          <View
            style={{
              width: 15,
              height: 4,
              borderRadius: 0.1,
              backgroundColor: "black",
              opacity: 0.8,
              position: "absolute"
            }}
          />
          <Logo />
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
