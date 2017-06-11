import React from "react";
import { asset, Pano, Text, View, Image, CylindricalPanel } from "react-vr";
import { connect } from "react-redux";

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
            transform: [{ translate: [0, 11, -20] }],
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
        <View
          style={{
            layoutOrigin: [0.5, 0.5],
            position: "absolute",
            transform: [{ translate: [0, -4, -9.2] }]
          }}
        >
          <NavigationMenu />
        </View>
        <Router />
      </View>
    );
  }
}

export default connect(null)(App);
