import React from "react";
import { asset, View, Text, Animated, Image } from "react-vr";

import CurvedPanel from "./CurvedPanel";

export class PortfolioOverViewHeadlines extends React.Component {
  state = { opacity: new Animated.Value(0) };

  componentDidMount() {
    this.animateOnRender();
  }

  animateOnRender() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.viewStyle()}>
        <View>
          <Text
            style={{
              fontSize: 0.6,
              fontWeight: "200",
              //layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            1. Wähle zunächst eine Ausführung aus
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 0.6,
              fontWeight: "200",
              //layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "right",
              textAlignVertical: "center"
            }}
          >
            2. Vergleiche unsere VestFolios mit ETFs,{" "}
          </Text>
          <Text
            style={{
              fontSize: 0.6,
              fontWeight: "200",
              //layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            VestFolios mit nachhaltigen Fonds und
          </Text>
          <Text
            style={{
              fontSize: 0.6,
              fontWeight: "200",
              //layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            VestFolios mit aktiv verwalteten Fonds
          </Text>
        </View>
      </Animated.View>
    );
  }
  viewStyle() {
    return {
      layoutOrigin: [0.5, 0.5],
      transform: [{ translate: [0, 8, -20] }],
      opacity: this.state.opacity,
      flexDirection: "column",
      alignItems: "center"
    };
  }
}

export class WelcomeViewHeadlines extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            position:"absolute",
            width: 1950,
            height: 1000,
            backgroundColor: "black",
            opacity: 0.8,
            borderRadius: 20
          }}
        />
        <View>

          <Text
            style={{
              fontSize: 120,
              fontWeight: "200",
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            Herzlich Willkommen zu VisualVest
            {" "}
            <Text style={{ color: "orangered" }}>VR</Text>
          </Text>
          <Text
            style={{
              fontSize: 120,
              fontWeight: "200",
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "center",
              textAlignVertical: "center",
              color: "dodgerblue"
            }}
          >
            Die moderne Geldanlage
          </Text>
        </View>
        <Image
          style={{ width: 700, height: 600, borderRadius: 20 }}
          source={asset("smarte_algorithmen.png")}
        />
      </View>
    );
  }
}
