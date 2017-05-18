import React from "react";
import { asset, Pano, Text, View, Image } from "react-vr";
import { connect } from "react-redux";

import PerformanceView from "./PerformanceView";
import PortfolioOverView from "./PortfolioOverView";

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
            justifyContent: "center"
          }}
        >
          <Image
            source={asset("visualvest-logo-transparent.png")}
            style={{ width: 2.2, height: 1 }}
          />
        </View>
        <Text
          style={{
            fontSize: 1,
            fontWeight: "300",
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translate: [0, 5, -12] }]
          }}
        >
          Herzlich Willkommen zu VisualVest <Text style={{color: "orangered"}}>VR</Text>
        </Text>

        <PortfolioOverView />
      </View>
    );
  }
}

export default connect(null)(App);
